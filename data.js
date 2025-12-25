// ===== Projects Data Structure =====
// Add your projects here - the website will automatically render them
const projectsData = [
    {
        id: 1,
        title: "Cloud Infrastructure Automation",
        description: "Automated cloud infrastructure deployment using Terraform and Kubernetes, implementing CI/CD pipelines for seamless deployments.",
        technologies: ["Kubernetes", "Docker", "CI/CD", "Terraform"],
        icon: "fa-server",
        githubUrl: "https://github.com/msafryx/cloud-infra",
        demoUrl: "https://demo.msafryx.com/cloud-infra",
        featured: true,
        category: "DevOps"
    },
    {
        id: 2,
        title: "ML Model Pipeline & Deployment",
        description: "End-to-end MLOps pipeline for training, versioning, and deploying machine learning models with automated monitoring.",
        technologies: ["TensorFlow", "MLflow", "Python", "Kubernetes"],
        icon: "fa-brain",
        githubUrl: "https://github.com/msafryx/ml-pipeline",
        demoUrl: "https://demo.msafryx.com/ml-pipeline",
        featured: true,
        category: "MLOps"
    },
    {
        id: 3,
        title: "Security Automation Platform",
        description: "Automated security scanning and compliance checking system with real-time threat detection and response capabilities.",
        technologies: ["Security", "Automation", "Python", "Docker"],
        icon: "fa-shield-alt",
        githubUrl: "https://github.com/msafryx/security-automation",
        demoUrl: "https://demo.msafryx.com/security",
        featured: true,
        category: "Cybersecurity"
    },
    {
        id: 4,
        title: "Observability & Monitoring Stack",
        description: "Comprehensive monitoring solution with Prometheus, Grafana, and distributed tracing for microservices architecture.",
        technologies: ["Kubernetes", "Prometheus", "Grafana", "ELK"],
        icon: "fa-chart-line",
        githubUrl: "https://github.com/msafryx/monitoring-stack",
        demoUrl: "https://demo.msafryx.com/monitoring",
        featured: true,
        category: "DevOps"
    },
    {
        id: 5,
        title: "AI-Powered Analytics Platform",
        description: "Intelligent analytics platform leveraging NLP and machine learning for data insights and predictive analytics.",
        technologies: ["AI/ML", "NLP", "APIs", "Python"],
        icon: "fa-robot",
        githubUrl: "https://github.com/msafryx/ai-analytics",
        demoUrl: "https://demo.msafryx.com/ai-analytics",
        featured: true,
        category: "AI/ML"
    },
    {
        id: 6,
        title: "DevSecOps Pipeline",
        description: "Integrated DevSecOps pipeline with automated security scanning, code quality checks, and GitOps workflows.",
        technologies: ["DevSecOps", "GitOps", "Automation", "CI/CD"],
        icon: "fa-code-branch",
        githubUrl: "https://github.com/msafryx/devsecops-pipeline",
        demoUrl: "https://demo.msafryx.com/devsecops",
        featured: true,
        category: "DevSecOps"
    }
    // Add more projects here as needed
];

// ===== Certifications Data Structure =====
// Add your certifications here - they will be displayed with verification links
const certificationsData = [
    {
        id: 1,
        name: "AWS Certified Solutions Architect - Professional",
        issuer: "Amazon Web Services",
        issueDate: "2023-06-15",
        expiryDate: "2026-06-15",
        credentialId: "AWS-SAP-123456",
        verificationUrl: "https://aws.amazon.com/verification",
        imageUrl: "https://via.placeholder.com/400x300?text=AWS+Certification",
        description: "Validated expertise in designing distributed systems on AWS.",
        category: "Cloud",
        icon: "fab fa-aws"
    },
    {
        id: 2,
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        issueDate: "2023-03-20",
        expiryDate: "2026-03-20",
        credentialId: "CKA-789012",
        verificationUrl: "https://www.cncf.io/certification/cka/verify",
        imageUrl: "https://via.placeholder.com/400x300?text=Kubernetes+Certification",
        description: "Demonstrated ability to perform the responsibilities of a Kubernetes administrator.",
        category: "DevOps",
        icon: "fab fa-docker"
    },
    {
        id: 3,
        name: "Google Cloud Professional ML Engineer",
        issuer: "Google Cloud",
        issueDate: "2023-09-10",
        expiryDate: "2026-09-10",
        credentialId: "GCP-MLE-345678",
        verificationUrl: "https://cloud.google.com/certification/verify",
        imageUrl: "https://via.placeholder.com/400x300?text=GCP+ML+Certification",
        description: "Expertise in productionizing ML models using Google Cloud Platform.",
        category: "MLOps",
        icon: "fab fa-google"
    },
    {
        id: 4,
        name: "Certified Information Systems Security Professional (CISSP)",
        issuer: "ISC²",
        issueDate: "2022-11-05",
        expiryDate: "2025-11-05",
        credentialId: "CISSP-901234",
        verificationUrl: "https://www.isc2.org/verify",
        imageUrl: "https://via.placeholder.com/400x300?text=CISSP+Certification",
        description: "Advanced expertise in information security and cybersecurity.",
        category: "Cybersecurity",
        icon: "fas fa-shield-alt"
    },
    {
        id: 5,
        name: "Microsoft Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "2023-01-15",
        expiryDate: "2026-01-15",
        credentialId: "AZURE-567890",
        verificationUrl: "https://learn.microsoft.com/certifications/verify",
        imageUrl: "https://via.placeholder.com/400x300?text=Azure+Certification",
        description: "Expert-level knowledge in designing solutions on Microsoft Azure.",
        category: "Cloud",
        icon: "fab fa-microsoft"
    },
    {
        id: 6,
        name: "Terraform Associate Certification",
        issuer: "HashiCorp",
        issueDate: "2023-04-22",
        expiryDate: "2026-04-22",
        credentialId: "TERRAFORM-234567",
        verificationUrl: "https://www.hashicorp.com/certification/verify",
        imageUrl: "https://via.placeholder.com/400x300?text=Terraform+Certification",
        description: "Proficiency in infrastructure as code using Terraform.",
        category: "DevOps",
        icon: "fas fa-code"
    }
    // Add more certifications here as needed
];

// ===== Credentials Data Structure =====
// Add your credentials/badges here - separate from certifications
const credentialsData = [
    {
        id: 1,
        name: "GitHub Verified Developer",
        issuer: "GitHub",
        issueDate: "2023-05-10",
        credentialId: "GH-DEV-001",
        verificationUrl: "https://github.com/msafryx",
        description: "Verified developer profile with active contributions.",
        category: "Development",
        icon: "fab fa-github",
        badgeColor: "#24292e"
    },
    {
        id: 2,
        name: "Docker Hub Verified Publisher",
        issuer: "Docker",
        issueDate: "2023-07-20",
        credentialId: "DH-PUB-002",
        verificationUrl: "https://hub.docker.com/u/msafryx",
        description: "Verified publisher of container images on Docker Hub.",
        category: "DevOps",
        icon: "fab fa-docker",
        badgeColor: "#0db7ed"
    },
    {
        id: 3,
        name: "Stack Overflow Top Contributor",
        issuer: "Stack Overflow",
        issueDate: "2023-08-15",
        credentialId: "SO-CONT-003",
        verificationUrl: "https://stackoverflow.com/users/msafryx",
        description: "Top contributor with high reputation and quality answers.",
        category: "Community",
        icon: "fab fa-stack-overflow",
        badgeColor: "#f48024"
    },
    {
        id: 4,
        name: "AWS Community Builder",
        issuer: "Amazon Web Services",
        issueDate: "2023-09-01",
        credentialId: "AWS-CB-004",
        verificationUrl: "https://aws.amazon.com/community/builders",
        description: "Recognized AWS Community Builder contributing to the community.",
        category: "Cloud",
        icon: "fab fa-aws",
        badgeColor: "#ff9900"
    }
    // Add more credentials here as needed
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, certificationsData, credentialsData };
}

