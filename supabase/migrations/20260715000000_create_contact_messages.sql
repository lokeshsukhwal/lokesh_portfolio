create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 3 and 254),
  subject text not null check (char_length(subject) between 3 and 160),
  message text not null check (char_length(message) between 20 and 5000),
  source text check (source is null or char_length(source) <= 500),
  status text not null default 'new' check (status in ('new', 'reviewed', 'replied', 'archived', 'spam')),
  submitted_at timestamptz not null default now()
);

create index if not exists contact_messages_status_submitted_idx
  on public.contact_messages (status, submitted_at desc);

alter table public.contact_messages enable row level security;
revoke all on table public.contact_messages from anon, authenticated;

create table if not exists public.contact_rate_limits (
  id bigint generated always as identity primary key,
  ip_hash text not null,
  attempted_at timestamptz not null default now()
);

create index if not exists contact_rate_limits_lookup_idx
  on public.contact_rate_limits (ip_hash, attempted_at desc);

alter table public.contact_rate_limits enable row level security;
revoke all on table public.contact_rate_limits from anon, authenticated;

create or replace function public.accept_contact_message(
  p_ip_hash text,
  p_name text,
  p_email text,
  p_subject text,
  p_message text,
  p_source text default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  recent_attempts integer;
  message_id uuid;
begin
  perform pg_advisory_xact_lock(hashtext(p_ip_hash));

  delete from public.contact_rate_limits
  where attempted_at < now() - interval '24 hours';

  select count(*) into recent_attempts
  from public.contact_rate_limits
  where ip_hash = p_ip_hash
    and attempted_at >= now() - interval '10 minutes';

  if recent_attempts >= 5 then
    raise exception 'rate_limit_exceeded' using errcode = 'P0001';
  end if;

  insert into public.contact_rate_limits (ip_hash) values (p_ip_hash);

  insert into public.contact_messages (name, email, subject, message, source)
  values (p_name, p_email, p_subject, p_message, p_source)
  returning id into message_id;

  return message_id;
end;
$$;

revoke all on function public.accept_contact_message(text, text, text, text, text, text) from public, anon, authenticated;
grant execute on function public.accept_contact_message(text, text, text, text, text, text) to service_role;

comment on table public.contact_messages is 'Private portfolio contact submissions. Access only through trusted server-side code.';
comment on function public.accept_contact_message is 'Atomically rate-limits and stores a validated contact submission.';
