# DevOps and Cloud Learning Path: Beginner to Production-Minded

This roadmap is ordered by dependency. Do not begin with Kubernetes before understanding Linux processes, networking, Git, and containers.

## Learning map

```text
Linux + Networking + Git
           |
           v
Scripting + Application basics
           |
           v
CI/CD + Containers
           |
           v
One cloud + Infrastructure as Code
           |
           v
Kubernetes + Observability + Security
           |
           v
SRE practices + architecture + incident response
```

## Stage 1: Foundations

Learn the shell, files, permissions, processes, services, packages, SSH, logs, CPU, memory, disks, DNS, HTTP, TCP, TLS, subnets, routing, and Git workflows.

Build:

- Run a small web service under `systemd`.
- Configure Nginx as a reverse proxy with TLS.
- Debug a deliberately broken DNS or port configuration.
- Write a runbook another learner can follow.

Primary resources:

- Linux documentation: https://docs.kernel.org/
- Pro Git: https://git-scm.com/book/en/v2
- MDN HTTP overview: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- Cloudflare learning center: https://www.cloudflare.com/learning/

## Stage 2: Automation and delivery

Learn Bash or Python, exit codes, idempotency, configuration, artifacts, dependency locking, tests, CI triggers, environments, approvals, secrets, rollbacks, and deployment verification.

Build:

- Test and package an application on every pull request.
- Build a versioned artifact once and promote the same artifact.
- Add linting, tests, a security scan, and a smoke test.
- Document failure and rollback behavior.

Primary resources:

- Bash manual: https://www.gnu.org/software/bash/manual/
- Python tutorial: https://docs.python.org/3/tutorial/
- GitHub Actions: https://docs.github.com/en/actions

## Stage 3: Containers

Learn images, layers, registries, namespaces, cgroups, volumes, networks, health checks, non-root users, multi-stage builds, SBOMs, and image scanning.

Build:

- Containerize an application using a multi-stage Dockerfile.
- Run it as a non-root user with a read-only filesystem where possible.
- Add health checks, resource limits, scanning, and version tags.

Primary resources:

- Docker guides: https://docs.docker.com/guides/
- OCI specifications: https://opencontainers.org/

## Stage 4: One cloud deeply

Choose AWS, Azure, or Google Cloud. Learn identity first, then networks, compute, storage, databases, load balancing, monitoring, cost, backup, and shared responsibility.

Build:

- A private network with public and private subnets.
- A load-balanced service with least-privilege identity.
- Central logs, metrics, budgets, backups, and recovery steps.

Primary resources:

- AWS Skill Builder: https://skillbuilder.aws/
- Microsoft Learn: https://learn.microsoft.com/training/azure/
- Google Cloud learning: https://cloud.google.com/learn/training

## Stage 5: Infrastructure as Code

Learn state, providers, modules, inputs, outputs, dependency graphs, drift, plan review, remote state, locking, imports, tests, and secret handling.

Build:

- Reusable Terraform modules for networking and a service.
- Remote encrypted state with locking.
- Format, validate, plan, policy, and apply stages in CI.
- A destroy/recovery exercise in a disposable environment.

Primary resources:

- Terraform documentation: https://developer.hashicorp.com/terraform/docs
- Ansible documentation: https://docs.ansible.com/

## Stage 6: Kubernetes

Learn pods, deployments, services, ingress, configuration, secrets, probes, resources, scheduling, storage, autoscaling, RBAC, network policies, upgrades, and failure modes.

Build:

- Deploy the same container with probes and resource requests/limits.
- Add ingress, TLS, autoscaling, disruption budgets, and restricted RBAC.
- Break readiness, DNS, image pulling, and configuration intentionally; write runbooks.

Primary resources:

- Kubernetes concepts: https://kubernetes.io/docs/concepts/
- Kubernetes tasks: https://kubernetes.io/docs/tasks/
- Helm documentation: https://helm.sh/docs/

## Stage 7: Observability, security, and SRE

Learn metrics, logs, traces, RED/USE methods, SLI/SLO/error budgets, actionable alerts, on-call, incident command, postmortems, threat modelling, dependency and image scanning, signing, provenance, and policy.

Build:

- Instrument a service with metrics, structured logs, and traces.
- Define an SLO and alerts tied to user impact.
- Trigger an incident, diagnose it, recover, and publish a blameless postmortem.
- Generate an SBOM, scan and sign the image, and verify it before deployment.

Primary resources:

- Google SRE books: https://sre.google/books/
- OpenTelemetry: https://opentelemetry.io/docs/
- Prometheus: https://prometheus.io/docs/introduction/overview/
- Grafana: https://grafana.com/docs/
- OWASP DevSecOps: https://owasp.org/www-project-devsecops-guideline/

## Proof checklist for job readiness

Your portfolio should show:

- architecture diagram and threat boundaries;
- reproducible infrastructure and application deployment;
- CI evidence with tests and security gates;
- least-privilege identity and secret handling;
- dashboards, SLOs, alerts, and an incident postmortem;
- backup, rollback, and recovery verification;
- a README that explains trade-offs, cost, limitations, and how to reproduce the work.

Certificates can support learning, but repositories, diagrams, runbooks, pipeline runs, dashboards, and postmortems demonstrate applied capability.

