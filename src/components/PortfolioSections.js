import { FaDocker, FaCloud, FaNetworkWired, FaChartLine } from "react-icons/fa";

export const skillGroups = [
    {
        number: "01",
        title: "Provision",
        description: "Turn infrastructure requirements into repeatable, reviewable environments.",
        skills: ["AWS", "Azure", "Google Cloud", "Terraform", "Ansible"],
        practices: ["Infrastructure as code", "Cloud foundations", "Configuration automation"],
        icon: <FaCloud />,
    },
    {
        number: "02",
        title: "Ship",
        description: "Package applications and create delivery paths that are consistent from commit to runtime.",
        skills: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "Jenkins", "GitLab CI"],
        practices: ["Containerization", "CI/CD workflows", "Deployment automation"],
        icon: <FaDocker />,
    },
    {
        number: "03",
        title: "Operate",
        description: "Make system health visible and give teams useful signals when something changes.",
        skills: ["Prometheus", "Grafana", "ELK Stack", "Linux", "Ubuntu"],
        practices: ["Metrics and dashboards", "Centralized logging", "Linux operations"],
        icon: <FaChartLine />,
    },
    {
        number: "04",
        title: "Connect & automate",
        description: "Build the networking and scripting glue that keeps services reachable and routine work repeatable.",
        skills: ["DNS", "Load Balancing", "Reverse Proxy", "TLS / SSL", "Bash", "Python", "Git"],
        practices: ["Traffic routing", "Secure endpoints", "Operational scripting"],
        icon: <FaNetworkWired />,
    },
];

export const projects = [
    {
        title: "Developer Portfolio Platform",
        type: "Shipped project",
        status: "Live & maintained",
        summary: "A responsive portfolio built as a real product surface: reusable React sections, accessible navigation, theme support, performance-aware loading, and a focused hiring journey.",
        stack: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
        challenge: "Turn a static resume into a fast, credible experience that communicates engineering work clearly across mobile and desktop.",
        engineering: ["Component-driven UI architecture", "Dark and light theme system", "Lazy-loaded interactive playground", "Keyboard and screen-reader affordances"],
        proof: ["Public source code", "Production build", "Responsive implementation"],
        repo: "https://github.com/lokeshsukhwal/lokesh_portfolio",
        live: null,
        codeLabel: "View repository",
    },
    {
        title: "Spring Boot Data API",
        type: "Backend project",
        status: "Source available",
        summary: "A Java backend project exploring persistence and relational domain modelling with Spring Boot and Spring Data JPA.",
        stack: ["Java", "Spring Boot", "Spring Data JPA", "Maven"],
        challenge: "Model application data and relationships behind a maintainable service layer using a production-relevant Java stack.",
        engineering: ["Repository-based persistence", "Relational entity mapping", "Layered backend structure", "Maven-managed build"],
        proof: ["Public source code", "Data model implementation", "Reproducible project structure"],
        repo: "https://github.com/lokeshsukhwal/SpringBootDataJpa",
        live: null,
        codeLabel: "Inspect the code",
    },
];

export const projectRoadmap = [
    {
        title: "Production-ready AWS platform",
        description: "Terraform-provisioned VPC and EKS platform with GitHub Actions, Argo CD, secrets management, monitoring, and documented rollback and disaster-recovery paths.",
        stack: ["AWS", "Terraform", "EKS", "Argo CD"],
        deliverables: "Architecture diagram · IaC modules · CI evidence · runbook",
    },
    {
        title: "SRE observability lab",
        description: "Instrument a small service with metrics, logs, traces, SLOs, actionable alerts, and a deliberately triggered incident followed by a written postmortem.",
        stack: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
        deliverables: "Dashboards · alert rules · load test · postmortem",
    },
    {
        title: "Secure software supply chain",
        description: "Build, scan, sign, and promote a container through environments with policy checks, SBOM generation, least-privilege cloud identity, and provenance verification.",
        stack: ["GitHub Actions", "Trivy", "Cosign", "Kubernetes"],
        deliverables: "Pipeline runs · SBOM · policy tests · threat model",
    },
];

export const workflowSteps = [
    "Code",
    "Git",
    "CI",
    "Docker",
    "Kubernetes",
    "Cloud",
    "Monitoring",
];
