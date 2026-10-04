import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink, FiSearch, FiLayers, FiInfo, FiBookOpen } from "react-icons/fi";

const GITHUB_USER = "RishavKumar-hash";
const GITHUB_PROFILE = `https://github.com/${GITHUB_USER}`;

const featuredProjects = [
  {
    title: "TaskHive",
    category: "backend",
    date: "Jan 2026",
    description:
      "Full-stack role-based project management platform supporting 3 user roles (Developer / Team Lead / Manager) with JWT authentication & RBAC across 10+ concurrent projects.",
    highlights: [
      "Architected 15+ RESTful APIs using Spring Boot and JPA/Hibernate for task assignment, ticket tracking, sprint monitoring, and multi-project coordination.",
      "Implemented Spring Security with JWT for secure stateless authentication and ReactJS dashboards for operational team visibility.",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "ReactJS", "PostgreSQL", "JWT", "REST API", "RBAC"],
    github: null,
    live: null,
    badge: "🔥 Key Featured Project",
  },
  {
    title: "College Reviewer",
    category: "ml",
    date: "Jul 2024",
    description:
      "College recommendation platform using Python-based filtering and scoring algorithms, reducing user search time by 35% and improving content relevance.",
    highlights: [
      "Engineered search, filtering, and recommendation algorithms using data-driven scoring strategies, boosting recommendation accuracy by 40%.",
      "Increased overall user platform engagement by 25% through optimized search UX.",
    ],
    tags: ["Python", "Data Processing", "REST API", "Scoring Algorithms", "Recommendation Engine"],
    github: `${GITHUB_PROFILE}/College_reviewer`,
    live: null,
    badge: "⭐ Python Data Engine",
  },
  {
    title: "CourseBuilder",
    category: "fullstack",
    date: "May 2024",
    description:
      "React web app for creating and organizing course content — add modules, upload files (images & PDFs), add links, and organize resources via drag-and-drop.",
    highlights: [
      "Built modular course structure with file uploads and external link management.",
      "Deployed live on Vercel with responsive drag-and-drop UI for content creators.",
    ],
    tags: ["React", "JavaScript", "Vite", "Drag & Drop", "Vercel"],
    github: `${GITHUB_PROFILE}/coursebuilder`,
    live: "https://coursebuilder-delta.vercel.app",
    badge: "🚀 Live Deployed Web App",
  },
];

const githubProjects = [
  {
    name: "expense_tracker",
    category: "backend",
    description: "Python expense tracking application for managing personal finances.",
    language: "Python",
    date: "May 2026",
    tags: ["Python", "Finance"],
  },
  {
    name: "pro_expense_tracker",
    category: "backend",
    description: "Enhanced expense tracker with advanced categorization and reporting features.",
    language: "Python",
    date: "May 2026",
    tags: ["Python", "Finance", "Analytics"],
  },
  {
    name: "stock_analysis",
    category: "ml",
    description: "Jupyter notebook-based stock market data analysis and visualization.",
    language: "Jupyter Notebook",
    date: "May 2026",
    tags: ["Python", "Data Analysis", "Finance"],
  },
  {
    name: "FARMA",
    category: "fullstack",
    description: "Agricultural technology project for modern farming solutions.",
    language: "Full Stack",
    date: "Jun 2024",
    tags: ["Agriculture", "Web App"],
  },
  {
    name: "KRYPTOX",
    category: "fullstack",
    description: "Cryptocurrency trading platform with real-time market data and portfolio tracking.",
    language: "JavaScript",
    date: "Mar 2024",
    tags: ["JavaScript", "Crypto", "FinTech"],
  },
  {
    name: "KRYPTOX-DASHBOARD-main",
    category: "fullstack",
    description: "Analytics dashboard companion for the KRYPTOX crypto trading platform.",
    language: "JavaScript",
    date: "Mar 2024",
    tags: ["JavaScript", "Dashboard", "Crypto"],
  },
  {
    name: "Heart-Disease-Diagnostic-Analysis-main",
    category: "ml",
    description: "ML model to predict heart disease risk using patient health metrics.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Machine Learning", "Healthcare", "Python"],
  },
  {
    name: "Hotel-Booking-Analysis-main",
    category: "ml",
    description: "Data analysis on hotel booking patterns, cancellations, and revenue insights.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Data Science", "Analytics", "Python"],
  },
  {
    name: "Health-Insurance-Cross-Sell-Prediction-main",
    category: "ml",
    description: "Predictive model for health insurance cross-sell opportunities using ML.",
    language: "Jupyter Notebook",
    date: "Mar 2024",
    tags: ["Machine Learning", "Insurance", "Python"],
  },
].map((p) => ({
  ...p,
  github: `${GITHUB_PROFILE}/${p.name}`,
}));

const publications = [
  {
    title: "Advancing Plant Disease Detection Using Machine Learning Models",
    venue: "International Conference BIDA 2024",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"],
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Automated Weather Prediction using IoT Devices & Predictive Analytics",
    venue: "Scopus Indexed Journal 2024",
    tags: ["IoT", "Python", "Data Science", "Predictive Modeling"],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
];

const categoryTabs = [
  { id: "all", label: "All Works" },
  { id: "featured", label: "⭐ Featured Projects" },
  { id: "backend", label: "Backend & APIs" },
  { id: "fullstack", label: "Full Stack Web" },
  { id: "ml", label: "ML & Data Science" },
];

export default function Projects({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filterProject = (p) => {
    const titleMatch = (p.title || p.name).toLowerCase().includes(search.toLowerCase());
    const descMatch = p.description.toLowerCase().includes(search.toLowerCase());
    const tagMatch = p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesSearch = titleMatch || descMatch || tagMatch;
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "featured") return matchesSearch && featuredProjects.some((f) => f.title === p.title);
    return matchesSearch && p.category === activeTab;
  };

  const filteredFeatured = featuredProjects.filter(filterProject);
  const filteredRepos = githubProjects.filter(filterProject);

  return (
    <section id="projects" className="py-20 bg-dark-card/30 border-y border-dark-border">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="section-title">Software Projects & Publications</h2>
          </div>
          <div className="section-divider" />
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors border border-dark-border px-3 py-1.5 rounded-xl bg-dark-card"
          >
            <FiGithub size={15} />
            @{GITHUB_USER}
          </a>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-glow"
                    : "bg-dark-card border border-dark-border text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects (e.g. React, Spring)"
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Featured Projects Grid */}
        {filteredFeatured.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiLayers /> Featured Engineering Projects ({filteredFeatured.length})
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {filteredFeatured.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-6 border-dark-border hover:border-cyan-500/50 hover:shadow-glow transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="badge bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono">
                        {project.badge}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">{project.date}</span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h4>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-cyan-400 font-mono">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-chip text-[11px] py-1 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dark-border/60">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <FiInfo size={14} /> Technical Details
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-dark-border/60 transition-colors"
                            aria-label="GitHub"
                          >
                            <FiGithub size={16} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                            aria-label="Live App"
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Repositories Grid */}
        {filteredRepos.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiGithub /> Open Source Repositories ({filteredRepos.length})
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.github}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="glass-card p-4 hover:border-cyan-500/40 hover:shadow-glow transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-200 text-sm group-hover:text-cyan-400 transition-colors truncate">
                        {repo.name}
                      </h4>
                      <FiGithub className="text-slate-500 group-hover:text-cyan-400 flex-shrink-0 transition-colors" size={15} />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-dark-border/40 pt-2">
                    <span className="text-cyan-400">{repo.language}</span>
                    <span>{repo.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* Research Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="pt-6 border-t border-dark-border"
        >
          <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FiBookOpen className="text-amber-400" /> Research Publications ({publications.length})
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className={`glass-card p-5 border ${pub.bg} hover:scale-[1.01] transition-all`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${pub.color}`}>
                  {pub.venue}
                </span>
                <p className="text-slate-100 font-bold text-sm sm:text-base mt-1 mb-3">{pub.title}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-[11px] py-1">
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
