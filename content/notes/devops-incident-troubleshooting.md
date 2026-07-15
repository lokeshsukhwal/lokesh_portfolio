# A Repeatable DevOps Incident Troubleshooting Method

> A vendor-neutral runbook for diagnosing cloud and delivery failures without guessing.

## Start with impact, not a favorite tool

```text
Alert or report
      |
      v
Define impact -> establish timeline -> identify recent change
      |                                  |
      v                                  v
Collect signals <---- metrics, logs, traces, events, config
      |
      v
Test one hypothesis -> mitigate safely -> verify recovery
      |
      v
Find root contributors -> prevent recurrence -> document
```

Ask four questions first:

1. Who or what is affected?
2. When did the behavior begin?
3. What changed shortly before it began?
4. What evidence would disprove the leading hypothesis?

## Follow the request path

For a web service, troubleshoot in dependency order:

```text
User
  -> DNS
  -> CDN / WAF
  -> Load balancer
  -> Ingress / reverse proxy
  -> Service discovery
  -> Application process
  -> Database / queue / external API
```

At each hop verify name resolution, connection, TLS, routing, authentication, application response, and dependency health.

## Fast Linux checks

```bash
# pressure and resource saturation
uptime
free -h
df -h
df -i
top

# processes and listeners
ps aux --sort=-%cpu | head
ss -lntup

# service state and recent errors
systemctl status SERVICE --no-pager
journalctl -u SERVICE --since '20 minutes ago' --no-pager
```

Do not restart immediately. A restart may restore service while destroying useful evidence. Capture timestamps, logs, resource state, and the deployed version first when impact allows.

## Network checks

```bash
dig +short api.example.com
curl -sv --connect-timeout 5 https://api.example.com/health
openssl s_client -connect api.example.com:443 -servername api.example.com
traceroute api.example.com
```

Interpret failures by layer:

| Observation | Investigate |
|---|---|
| DNS returns nothing | record, resolver, delegation, propagation |
| TCP timeout | firewall, security group, route, listener |
| TLS error | certificate chain, hostname, expiry, clock |
| HTTP 401/403 | identity, token, policy, WAF |
| HTTP 502/503 | upstream health, readiness, capacity, timeout |
| slow 200 response | saturation, dependency latency, query performance |

## Kubernetes checks

```bash
kubectl get pods -A -o wide
kubectl get events -A --sort-by=.lastTimestamp | tail -50
kubectl describe pod POD -n NAMESPACE
kubectl logs POD -n NAMESPACE --previous
kubectl get deploy,rs,svc,endpoints,ingress -n NAMESPACE
kubectl top pods -n NAMESPACE
```

```text
Pending          -> scheduling, quota, PVC, node selector
ImagePullBackOff -> image name, tag, registry auth, network
CrashLoopBackOff -> process exit, config, secret, dependency
Running not ready-> readiness probe, port, dependency health
Service has no endpoints -> selector mismatch or pods not ready
```

## CI/CD failure isolation

```text
Pipeline failed
  |
  +-- checkout/install -> credentials, registry, lockfile, network
  +-- test             -> reproduce locally with same version
  +-- build            -> compiler output, memory, environment
  +-- scan/policy      -> inspect finding; do not blindly suppress
  +-- deploy           -> identity, manifest, quota, target health
  +-- verify           -> probes, smoke tests, logs, rollback criteria
```

Record the commit SHA, runner image, dependency lockfile, environment, and exact failing command. “Works locally” is not evidence until the environments are compared.

## Safe mitigation order

1. Stop further damage: pause rollout, disable the failing job, or shed load.
2. Restore service: rollback, fail over, scale, or bypass only when the risk is understood.
3. Verify user-facing recovery with an external check.
4. Preserve evidence and continue root-cause analysis.
5. Remove temporary bypasses and document ownership.

## Incident note template

```text
Impact:
Start/end time and timezone:
Detection source:
Recent changes:
Timeline of observations and actions:
Evidence:
Mitigation:
Root contributors:
Why safeguards did not prevent it:
Corrective actions, owners, and due dates:
```

## Key lesson

Strong troubleshooting is disciplined uncertainty reduction. Move through the request path, separate observation from assumption, change one variable at a time, and verify recovery from the user's perspective.

