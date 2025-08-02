const profileData = {
  name: "Om Prakash Singh",
  profession: "Software Engineer | AI/ML System Validation Expert | Firmware Development Specialist",
  about: {
    college: "National Institute of Technology, Durgapur",
    collegeLink: "http://www.nitdgp.ac.in/",
    job: {
      title: "Software Engineer 2 (Device Validation)",
      company: "Microsoft",
      location: "Hyderabad, India",
    },
    degree: "M.Tech in Computer Science Engineering (2018), B.Tech in Computer Science Engineering (2015)",
    interests: "AI/ML System Validation, Firmware Development, Test Automation, Windows AI Workloads, and Silicon Validation",
    volunteerWork: "Youth For Seva",
    volunteerDescription: "Contributing to educational initiatives for underprivileged communities and promoting digital literacy",
    resumeLink: "./files/Om-Resume.pdf",
    skills: [
      "Python", "PowerShell", "C", "C++", "Perl", "Shell Scripting",
      "ONNX Runtime", "LLM - Phi Models", "Content Moderation APIs",
      "Firmware Development", "System Validation", "Performance Optimization",
      "JTAG", "WinDbg", "WPR/WPA", "Metaware", "VS Code", "AppVerifier",
      "Windows Internals", "PCIe", "NVMe", "SOC Architecture", "Power Management",
      "Git", "GitHub", "CI/CD Pipelines", "Automated Testing"
    ],
    experience: "7+ years of specialized experience in AI/ML system validation, firmware development, and test automation across Microsoft, Intel, and L&T Technology Services. Expert in building scalable validation frameworks for next-generation AI features, with proven track record of reducing test execution time by 40% and post-silicon bugs by 25%."
  },
  projects: [
    {
      title: "EdgeOptimizer AI Agent",
      description: "Intelligent monitoring system to track on-device model power usage and CPU/NPU utilization across Windows Studio Effects, enabling real-time performance optimization for AI workloads.",
      technologies: ["PowerShell", "AI/ML Monitoring", "Windows APIs", "Performance Profiling", "NPU Optimization"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2025",
      company: "Microsoft"
    },
    {
      title: "Copilot+ PC Validation Infrastructure",
      description: "Comprehensive API-level model validation pipelines for Copilot+ PCs, ensuring seamless integration across Intel, AMD, and QNN IHVs while resolving critical compatibility issues.",
      technologies: ["PowerShell", "Test Automation", "AI Model Validation", "Cross-platform Integration", "API Testing"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2024",
      company: "Microsoft"
    },
    {
      title: "Windows Studio Effects Validation Framework",
      description: "PowerShell-based test automation frameworks for validating AI camera features supporting millions of Copilot+ PC users. Reduced test suite runtime by 40% through dynamic synchronization.",
      technologies: ["PowerShell", "Test Automation", "AI Camera Features", "Performance Optimization", "Windows APIs"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2024",
      company: "Microsoft"
    },
    {
      title: "CXL Firmware Integration Platform",
      description: "End-to-end firmware integration for Asynchronous DRAM Refresh (ADR) flows in CXL interface, covering low-power scenarios and reset management across Xeon server platforms.",
      technologies: ["C++", "Firmware Development", "CXL Interface", "Power Management", "PCIe Gen6"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2023-2024",
      company: "Intel"
    },
    {
      title: "Pre-Silicon Validation Suite",
      description: "Comprehensive validation framework for idle PM and reset flows using Simics and Zebu platforms. Contributed to 25% reduction in post-silicon bugs through improved validation coverage.",
      technologies: ["C++", "Simics", "Zebu", "Perspec", "Silicon Validation", "Power Management"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2021-2024",
      company: "Intel"
    },
    {
      title: "NVMe Thermal Management Suite",
      description: "Modular Python-based automation framework for thermal and power management validation of NVMe storage platforms, covering 25+ test scenarios and firmware transition states.",
      technologies: ["Python", "NVMe Protocol", "Test Automation", "Thermal Management", "JTAG", "Power Validation"],
      liveLink: "#",
      sourceLink: "#",
      image: "./images/Portfolio.png",
      year: "2020-2021",
      company: "L&T Technology Services"
    },
    {
      title: "Portfolio Template",
      description: "A responsive, accessible portfolio template with dark/light mode toggle and dynamic content loading. Open source template for developers.",
      technologies: ["HTML", "CSS", "JavaScript", "SCSS", "Responsive Design"],
      liveLink: "https://fantops.github.io/omsingh/",
      sourceLink: "https://github.com/fantops/omsingh",
      image: "./images/Portfolio.png",
      year: "2024",
      company: "Personal Project"
    },
  ],
  achievements: [
    "Reduced test execution time by 40% through performance optimization at Microsoft (Jan 2025)",
    "Built validation infrastructure for Copilot+ PCs supporting millions of users (Sep 2024)",
    "Contributed to 25% reduction in post-silicon bugs through improved validation coverage at Intel",
    "Received 'Star of the Month' at Intel for early bug discovery in CXL firmware flows",
    "Awarded Spot Awards at L&T Technology Services for SDExpress POC validation",
    "Enhanced code coverage by 25% and reduced production bugs through CI/CD improvements",
    "Led validation for MEP v1 releases across multiple platforms (LNL, STRX, Cadmus)",
    "Independently triaged 20+ issues across 10+ release cycles maintaining 99% pipeline reliability"
  ],
  experience: [
    {
      title: "Software Engineer 2 (Device Validation)",
      company: "Microsoft",
      location: "Hyderabad, India",
      duration: "June 2024 – Present",
      highlights: [
        "Developed PowerShell-based test automation frameworks for Windows Studio Effects",
        "Built EdgeOptimizer AI agent for tracking on-device model power usage",
        "Contributed to Copilot+ PCs validation infrastructure",
        "Reduced test suite run time by 40% through optimization"
      ]
    },
    {
      title: "Emulation Engineer (Pre-Silicon Validation)",
      company: "Intel",
      location: "Bangalore, India", 
      duration: "July 2021 – June 2024",
      highlights: [
        "Owned firmware integration for ADR flow in CXL interface",
        "Developed 10+ PCIe Gen6 transactor enhancements in C++",
        "Contributed to 25% reduction in post-silicon bugs",
        "Validation for idle PM and reset flows using Simics and Zebu"
      ]
    },
    {
      title: "Software Engineer",
      company: "L&T Technology Services",
      location: "Bangalore, India",
      duration: "Sep 2018 – July 2021", 
      highlights: [
        "Designed modular test automation suite for NVMe storage platforms",
        "Developed 25+ test scenarios for power and thermal validation",
        "Conducted post-silicon debugging using JTAG and Metaware",
        "Performed NVMe 1.3 protocol validation"
      ]
    }
  ],
  contact: {
    email: "omprakash300@gmail.com",
    mailto: `mailto:omprakash300@gmail.com`,
    phone: "+91-7415741371",
    location: "Hyderabad, India"
  },
  socialLinks: {
    twitter: "https://twitter.com/omsinghbaba/",
    github: "https://github.com/fantops",
    linkedin: "https://www.linkedin.com/in/omsingh-nitd/",
  },
};