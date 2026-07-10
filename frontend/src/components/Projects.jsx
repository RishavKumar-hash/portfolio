import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const GITHUB_USER = "RishavKumar-hash";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USER}`;

const featuredProjects = [
  {
    title: "TaskHive",
    date: "Jan 2026",
    description:
      "Full-stack role-based project management platform supporting 3 user roles (Developer / Team Lead / Manager) with JWT authentication and RBAC across 10+ concurrent projects.",
    highlights: [
      "Architected 15+ RESTful APIs using Spring Boot and JPA/Hibernate for task assignment, ticket tracking, sprint monitoring, and multi-project coordination.",
      "Implemented Spring Security with JWT for secure auth and ReactJS dashboards for real-time operational visibility across teams.",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "ReactJS", "PostgreSQL", "JWT", "REST API", "RBAC"],
    github: null,
    live: null,
    gradient: "from-blue-600/20 to-violet-600/20",
    border: "border-blue-500/20",
  },
  {
    title: "College Reviewer",
    date: "Jul 2024",
    description:
      "College recommendation platform using Python-based filtering and scoring algorithms, reducing user search time by 35% and improving content relevance.",
    highlights: [
      "Engineered search, filtering, and recommendation features using data-driven strategies, boosting recommendation accuracy by 40%.",
      "Increased platform engagement by 25% through improved content relevance and user experience.",
    ],
    tags: ["Python", "Data Processing", "REST API", "Scoring Algorithms", "Recommendation Engine"],
    github: `${GITHUB_PROFILE}/College_reviewer`,
    live: null,
    gradient: "from-violet-600/20 to-pink-600/20",
    border: "border-violet-500/20",
  },
  {
    title: "CourseBuilder",
    date: "May 2024",
    description:
      "React web app for creating and organizing course content — add modules, upload files (images & PDFs), add links, and organize resources via drag-and-drop.",
    highlights: [
      "Built modular course structure with file uploads and external link management.",
      "Deployed live on Vercel with responsive UI for educators and content creators.",
    ],
    tags: ["React", "JavaScript", "Vite", "Drag & Drop", "Vercel"],
    github: `${GITHUB_PROFILE}/coursebuilder`,
    live: "https://coursebuilder-delta.vercel.app",
    gradient: "from-cyan-600/20 to-blue-600/20",
    border: "border-cyan-500/20",
  },
];

const githubProjects = [
  {
    name: "expense_tracker",
    description: "Python expense tracking application for managing personal finances.",
    language: "Python",
    date: "May 2026",
    tags: ["Python", "Finance"],
    gradient: "from-emerald-600/15 to-teal-600/15",
  },
  {
    name: "pro_expense_tracker",
    description: "Enhanced expense tracker with advanced categorization and reporting features.",
    language: "Python",
    date: "May 2026",
    tags: ["Python", "Finance", "Analytics"],
    gradient: "from-emerald-600/15 to-green-600/15",
  },
  {
    name: "stock_analysis",
    description: "Jupyter notebook-based stock market data analysis and visualization.",
    language: "Jupyter Notebook",
    date: "May 2026",
    tags: ["Python", "Data Analysis", "Finance"],
    gradient: "from-amber-600/15 to-orange-600/15",
  },
  {
    name: "FARMA",
    description: "Agricultural technology project for modern farming solutions.",
    language: "Full Stack",
    date: "Jun 2024",
    tags: ["Agriculture", "Web App"],
    gradient: "from-green-600/15 to-lime-600/15",
  },
  {
    name: "KRYPTOX",
    description: "Cryptocurrency trading platform with real-time market data and portfolio tracking.",
    language: "JavaScript",
    date: "Mar 2024",
    tags: ["JavaScript", "Crypto", "FinTech"],
    gradient: "from-yellow-600/15 to-amber-600/15",
  },
  {
    name: "KRYPTOX-DASHBOARD-main",
    description: "Analytics dashboard companion for the KRYPTOX crypto trading platform.",
    language: "JavaScript",
    date: "Mar 2024",
    tags: ["JavaScript", "Dashboard", "Crypto"],
    gradient: "from-yellow-600/15 to-orange-600/15",
  },
  {
    name: "SubwaY-main",
    description: "Subway-style food ordering web application with cart and checkout flow.",
    language: "JavaScript",
    date: "Mar 2024",
    tags: ["JavaScript", "E-commerce", "Frontend"],
    gradient: "from-red-600/15 to-rose-600/15",
  },
  {
    name: "Heart-Disease-Diagnostic-Analysis-main",
    description: "ML model to predict heart disease risk using patient health metrics.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Machine Learning", "Healthcare", "Python"],
    gradient: "from-rose-600/15 to-pink-600/15",
  },
  {
    name: "Hotel-Booking-Analysis-main",
    description: "Data analysis on hotel booking patterns, cancellations, and revenue insights.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Data Science", "Analytics", "Python"],
    gradient: "from-indigo-600/15 to-violet-600/15",
  },
  {
    name: "Health-Insurance-Cross-Sell-Prediction-main",
    description: "Predictive model for health insurance cross-sell opportunities using ML.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Machine Learning", "Insurance", "Python"],
    gradient: "from-sky-600/15 to-blue-600/15",
  },
  {
    name: "Budget-Sales-Data-Analysis-main",
    description: "Sales and budget data analysis with trend visualization and forecasting.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Data Analysis", "Visualization", "Python"],
    gradient: "from-purple-600/15 to-fuchsia-600/15",
  },
  {
    name: "Oasis",
    description: "Web development project built during Oasis Infobyte internship.",
    language: "HTML",
    date: "Mar 2024",
    tags: ["HTML", "CSS", "Web Dev"],
    gradient: "from-teal-600/15 to-cyan-600/15",
  },
  {
    name: "Bharat-Intern",
    description: "Web development portfolio project from Bharat Intern program.",
    language: "HTML",
    date: "Aug 2023",
    tags: ["HTML", "Web Dev", "Internship"],
    gradient: "from-orange-600/15 to-red-600/15",
  },
].map((p) => ({
  ...p,
  github: `${GITHUB_PROFILE}/${p.name}`,
}));

const publications = [
  {
    title: "Advancing Plant Disease Detection",
    venue: "International Conference BIDA 2024",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"],
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Automated Weather Prediction using IoT Devices",
    venue: "Scopus Indexed Journal 2024",
    tags: ["IoT", "Python", "Data Science", "Predictive Modeling"],
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
];

const languageColors = {
  Python: "text-yellow-400",
  JavaScript: "text-yellow-300",
  "Jupyter Notebook": "text-orange-400",
  HTML: "text-orange-300",
  Java: "text-red-400",
  "Full Stack": "text-primary",
};

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-dark-card/30">
      <div className="section-wrapper" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors flex-shrink-0"
          >
            <FiGithub size={16} />
            @{GITHUB_USER}
          </a>
        </div>

        {/* Featured */}
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          ⭐ Featured
        </h3>
        <div className="grid lg:grid-cols-3 gap-6 mb-14">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative glass-card p-6 overflow-hidden hover:scale-[1.01] transition-all group h-full flex flex-col ${project.border}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs text-slate-500 font-mono">{project.date}</span>
                    <h3 className="text-xl font-bold text-slate-100 mt-0.5 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All GitHub repos */}
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          <FiGithub className="inline mr-1.5 -mt-0.5" size={14} />
          All GitHub Repositories ({githubProjects.length})
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {githubProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.5 }}
              className="glass-card p-5 group hover:border-primary/30 hover:scale-[1.02] transition-all block relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-slate-200 text-sm group-hover:gradient-text transition-all truncate">
                    {project.name}
                  </h4>
                  <FiGithub
                    className="text-slate-600 group-hover:text-primary flex-shrink-0 transition-colors"
                    size={16}
                  />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono ${languageColors[project.language] || "text-slate-400"}`}
                  >
                    {project.language}
                  </span>
                  <span className="text-xs text-slate-600 font-mono">{project.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mb-14"
        >
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <FiGithub size={16} />
            View all repos on GitHub
            <FiStar size={14} className="text-amber-400" />
          </a>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-slate-300 mb-4">
            📄 Research Publications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className={`glass-card p-5 border ${pub.bg} hover:scale-[1.01] transition-all`}
              >
                <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${pub.color}`}>
                  {pub.venue}
                </p>
                <p className="text-slate-200 font-semibold text-sm mb-3">{pub.title}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
