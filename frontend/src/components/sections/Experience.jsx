import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    role: "System Engineer / Software Developer",
    company: "Nokia Solutions & Networks — Contractor via TCS",
    period: "Jul 2025 – Present",
    location: "Noida, India (On-site)",
    type: "Full-time Enterprise",
    color: "cyan",
    impactBadge: "⚡ 50+ Production Fixes & 30% CI/CD Speedup",
    points: [
      "Engineered and maintained 5+ backend enterprise identity and security modules using Java and Spring Boot for Nokia NIAM IAM platform, supporting 100+ global telecom & enterprise clients.",
      "Diagnosed and resolved 50+ critical production issues across OAuth2 token issuance, JWT signature verification, RBAC permission resolution, and REST API endpoints.",
      "Refactored legacy Python automation scripts in CI/CD deployment pipelines, accelerating deployment speed by 30% and eliminating manual deployment errors.",
      "Collaborated across 3+ Agile Scrum squads, reviewed 100+ code commits, and authored comprehensive API & architectural documentation for 10+ core modules.",
    ],
    tags: ["Java", "Spring Boot", "IAM", "RBAC", "OAuth2", "JWT", "REST API", "Python", "CI/CD", "PostgreSQL"],
  },
  {
    role: "Software Developer Intern",
    company: "Nokia Solutions & Networks",
    period: "Aug 2024 – May 2025",
    location: "Noida, India (On-site)",
    type: "Internship",
    color: "accent",
    impactBadge: "🔒 20+ Security Defects Resolved & 30+ Automated API Tests",
    points: [
      "Contributed to 3+ IAM security modules covering authentication workflows, access control policies, privilege management, and RBAC securing 5+ enterprise environments.",
      "Identified and remediated 20+ backend identity defects, improving application stability by 25% and reducing incident response time by 40%.",
      "Designed and automated 30+ Java integration test suites for REST API security endpoints, ensuring zero regression across sprint releases.",
    ],
    tags: ["Java", "Spring Security", "IAM Security", "REST API", "NIAM", "JUnit / Mockito", "Git"],
  },
];

const education = {
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  university: "Chandigarh University",
  period: "Aug 2021 – Jul 2025",
  cgpa: "8.5 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object Oriented Programming",
    "Software Engineering",
  ],
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="py-20">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
              CAREER ROADMAP
            </span>
            <h2 className="section-title">Enterprise Experience & Education</h2>
          </div>
          <div className="section-divider" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-accent to-dark-border" />

          <div className="space-y-12 pl-12 sm:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full border-2 border-cyan-400 bg-dark flex items-center justify-center shadow-glow">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                <div className="glass-card p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-glow transition-all group">
                  {/* Header info */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                        <FiBriefcase className="text-cyan-400" />
                        {exp.role}
                      </h3>
                      <p className="text-slate-300 font-semibold text-sm sm:text-base mt-0.5">{exp.company}</p>
                    </div>
                    <span className="badge bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                      {exp.type}
                    </span>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="text-cyan-400" size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="text-accent" size={13} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Impact highlight pill */}
                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 flex items-center gap-2">
                    <FiAward size={15} className="text-cyan-400 flex-shrink-0" />
                    <span>{exp.impactBadge}</span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={15} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-dark-border/60">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-5 h-5 rounded-full border-2 border-emerald-400 bg-dark flex items-center justify-center shadow-glow-emerald">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="glass-card p-6 sm:p-8 hover:border-emerald-500/40 hover:shadow-glow-emerald transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                      🎓 ACADEMIC BACKGROUND
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">{education.degree}</h3>
                    <p className="text-slate-300 font-semibold mt-0.5">{education.university}</p>
                  </div>
                  <span className="badge bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
                    CGPA {education.cgpa}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-4 flex items-center gap-2">
                  <FiCalendar size={13} className="text-emerald-400" />
                  {education.period}
                </div>

                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2">
                    Core Computer Science Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span key={course} className="skill-chip text-xs border-emerald-500/20 text-slate-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
