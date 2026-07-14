import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaDownload, FaCloud, FaServer, FaNetworkWired, FaShieldAlt, FaCodeBranch, FaChartLine, FaRocket } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiGrafana, SiPrometheus, SiAnsible, SiJenkins, SiGithubactions, SiGooglecloud, SiMicrosoftazure } from "react-icons/si";

export const heroStats = [
    { label: "Cloud Platforms", value: "AWS / Azure / GCP" },
    { label: "Automation", value: "Terraform • Ansible" },
    { label: "Delivery", value: "CI/CD • Containers" },
];

export const skillGroups = [
    {
        title: "Cloud",
        skills: ["AWS", "Azure", "Google Cloud"],
        icon: <FaCloud />,
    },
    {
        title: "Containers",
        skills: ["Docker", "Kubernetes", "Helm"],
        icon: <FaDocker />,
    },
    {
        title: "Infrastructure as Code",
        skills: ["Terraform", "Ansible"],
        icon: <SiTerraform />,
    },
    {
        title: "CI/CD",
        skills: ["GitHub Actions", "Jenkins", "GitLab CI"],
        icon: <FaCodeBranch />,
    },
    {
        title: "Monitoring",
        skills: ["Prometheus", "Grafana", "ELK Stack"],
        icon: <FaChartLine />,
    },
    {
        title: "Scripting",
        skills: ["Bash", "Python"],
        icon: <FaCodeBranch />,
    },
    {
        title: "Version Control",
        skills: ["Git", "GitHub"],
        icon: <FaGithub />,
    },
    {
        title: "Operating Systems",
        skills: ["Linux", "Ubuntu"],
        icon: <FaServer />,
    },
    {
        title: "Networking",
        skills: ["DNS", "Load Balancing", "Reverse Proxy", "SSL"],
        icon: <FaNetworkWired />,
    },
];

export const experienceTimeline = [
    {
        title: "Internship & Hands-on Engineering",
        type: "Experience",
        description: "Built automation-first solutions, delivered cloud-ready deployments, and improved release reliability across modern stacks.",
    },
    {
        title: "Freelance DevOps Delivery",
        type: "Delivery",
        description: "Partnered with founders and teams to ship infrastructure, CI/CD flows, and monitoring setups that scale with confidence.",
    },
    {
        title: "Open Source & Community Learning",
        type: "Growth",
        description: "Continuously sharpened systems thinking through real-world experiments, team collaboration, and open-source exploration.",
    },
];

export const certifications = [
    { name: "AWS Cloud Practitioner", focus: "Cloud fundamentals" },
    { name: "Azure Fundamentals", focus: "Cloud architecture" },
    { name: "Kubernetes Essentials", focus: "Container orchestration" },
];

export const projects = [
    {
        title: "Cloud-Native Platform Modernization",
        summary: "Reimagined a legacy service footprint into an automated, resilient cloud deployment pipeline with IaC and observability baked in.",
        stack: ["AWS", "Terraform", "Docker", "Kubernetes", "Prometheus"],
        features: ["GitOps-inspired delivery", "Self-healing deployments", "Centralized logs and metrics"],
        outcome: "Cut deployment friction and raised release confidence across the delivery lifecycle.",
        accent: "from-cyan-500 to-blue-600",
    },
    {
        title: "CI/CD Reliability Engineering",
        summary: "Designed a robust build and release workflow that reduced manual intervention and accelerated delivery for fast-moving teams.",
        stack: ["GitHub Actions", "Jenkins", "Docker", "Ansible"],
        features: ["Parallel test execution", "Secrets handling", "Rollback-ready releases"],
        outcome: "Improved release predictability and shortened recovery time during incidents.",
        accent: "from-fuchsia-500 to-purple-600",
    },
    {
        title: "Observability and SRE Practice",
        summary: "Built a monitoring foundation with dashboards, alerts, and service health tracking that made production incidents easier to navigate.",
        stack: ["Grafana", "Prometheus", "ELK", "Linux"],
        features: ["Custom alerting", "Dependency visibility", "Latency and error trend analysis"],
        outcome: "Elevated incident response and gave the team a clearer view of platform health.",
        accent: "from-emerald-500 to-teal-600",
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

export function SectionTitle({ eyebrow, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
        >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400 mb-3">{eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">{description}</p>
        </motion.div>
    );
}

export function StatCard({ label, value }) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
        >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
        </motion.div>
    );
}

export function Pill({ children }) {
    return <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{children}</span>;
}
