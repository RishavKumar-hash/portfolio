import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSearch, FiCheckCircle } from "react-icons/fi";

const skillGroups = [
  {
    category: "Languages",
    tag: "languages",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: "Expert" },
      { name: "JavaScript", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "C++", level: "Familiar" },
      { name: "SQL", level: "Expert" },
    ],
  },
  {
    category: "Backend & Microservices",
    tag: "backend",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Spring Boot", level: "Expert" },
      { name: "Spring Security", level: "Expert" },
      { name: "Spring MVC", level: "Proficient" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices Architecture", level: "Expert" },
      { name: "Hibernate / JPA", level: "Expert" },
    ],
  },
  {
    category: "Web & Frontend",
    tag: "frontend",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "React / React.js", level: "Proficient" },
      { name: "React Query", level: "Proficient" },
      { name: "Role-Based Routing", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5 / CSS3", level: "Expert" },
    ],
  },
  {
    category: "API Engineering",
    tag: "api",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "RESTful APIs", level: "Expert" },
      { name: "API Integration & Consumption", level: "Expert" },
      { name: "JSON Data Handling", level: "Expert" },
      { name: "AuthN/AuthZ APIs", level: "Expert" },
      { name: "Input Validation", level: "Expert" },
    ],
  },
  {
    category: "Security & IAM Domain",
    tag: "security",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "IAM Security", level: "Expert" },
      { name: "AuthN / AuthZ", level: "Expert" },
      { name: "RBAC (Role-Based Access)", level: "Expert" },
      { name: "JWT", level: "Expert" },
      { name: "OAuth2", level: "Expert" },
      { name: "Keycloak SSO", level: "Proficient" },
      { name: "Secure Coding", level: "Expert" },
    ],
  },
  {
    category: "Databases & Storage",
    tag: "database",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "MySQL", level: "Expert" },
      { name: "MariaDB", level: "Proficient" },
      { name: "Relational Databases", level: "Expert" },
      { name: "Query Optimization", level: "Proficient" },
    ],
  },
  {
    category: "Testing & QA Automation",
    tag: "testing",
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "JUnit", level: "Expert" },
      { name: "Mockito", level: "Expert" },
      { name: "Postman API Testing", level: "Expert" },
      { name: "Automated API Testing", level: "Expert" },
      { name: "Regression Testing", level: "Proficient" },
    ],
  },
  {
    category: "DevOps, Cloud & Tools",
    tag: "devops",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Docker", level: "Proficient" },
      { name: "Jenkins", level: "Proficient" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "Git / GitHub", level: "Expert" },
      { name: "Maven", level: "Expert" },
      { name: "Linux / Shell Automation", level: "Proficient" },
      { name: "AWS Fundamentals", level: "Certified" },
    ],
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend & Microservices" },
  { id: "frontend", label: "Frontend" },
  { id: "security", label: "Security & IAM" },
  { id: "database", label: "Databases" },
  { id: "testing", label: "Testing" },
  { id: "devops", label: "DevOps & Tools" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filteredGroups = skillGroups
    .filter((g) => activeTab === "all" || g.tag === activeTab)
    .map((g) => ({
      ...g,
      skills: g.skills.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((g) => g.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-dark-card/30 border-y border-dark-border">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
              COMPETENCY MATRIX
            </span>
            <h2 className="section-title">Technical Skills & Expertise</h2>
          </div>
          <div className="section-divider" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === c.id
                    ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-glow"
                    : "bg-dark-card border border-dark-border text-slate-400 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skill (e.g. Java, Keycloak)"
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Grid of skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="glass-card p-5 hover:border-cyan-500/40 hover:shadow-glow transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill Chips with Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <FiCheckCircle size={12} className="text-cyan-400" />
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono bg-dark/60 px-1.5 py-0.5 rounded border border-dark-border">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
