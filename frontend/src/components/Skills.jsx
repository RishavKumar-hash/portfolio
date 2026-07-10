import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    category: "Languages",
    color: "from-blue-500 to-cyan-500",
    skills: ["Java", "Python", "SQL", "JavaScript", "C++"],
  },
  {
    category: "Backend & Frameworks",
    color: "from-violet-500 to-purple-500",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST API",
      "JPA / Hibernate",
      "Microservices",
      "OAuth2",
      "JWT",
    ],
  },
  {
    category: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["MySQL", "PostgreSQL", "MariaDB", "PL/SQL"],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500 to-amber-500",
    skills: ["AWS", "GCP", "Docker", "Git", "GitHub", "CI/CD", "Linux", "Postman"],
  },
  {
    category: "Security & IAM",
    color: "from-red-500 to-rose-500",
    skills: ["IAM", "RBAC", "NIAM", "Access Control", "Authentication", "Authorization"],
  },
  {
    category: "Methods & Tools",
    color: "from-teal-500 to-cyan-500",
    skills: ["Agile / Scrum", "SDLC", "OOP", "System Design", "ReactJS", "Data Structures"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="py-20 bg-dark-card/30">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="glass-card p-5 hover:border-primary/30 transition-all group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className={`w-2 h-6 rounded-full bg-gradient-to-b ${group.color}`}
                />
                <h3 className="text-sm font-semibold text-slate-300 group-hover:text-slate-100 transition-colors">
                  {group.category}
                </h3>
              </div>
              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
