export const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL?.replace(/\/$/, "") || "";
export const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || "";
export const contactFunctionUrl = supabaseUrl ? `${supabaseUrl}/functions/v1/contact-submit` : "";
