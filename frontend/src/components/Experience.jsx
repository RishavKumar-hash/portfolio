import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    role: "System Engineer / Software Developer",
    company: "Nokia Solutions — Contractor via TCS",
    period: "Jul 2025 – Present",
    location: "On-site, India",
    type: "Full-time",
    color: "primary",
    points: [
      "Developed and maintained 5+ backend security modules using Java and Spring Boot for Nokia NIAM enterprise IAM applications, supporting 100+ enterprise clients.",
      "Resolved 50+ critical production issues related to authentication, access control, authorization, and REST API integrations, improving reliability and uptime.",
      "Refactored Python automation scripts in CI/CD deployment pipelines, reducing deployment time by 30% and minimising manual intervention.",
      "Collaborated across 3+ cross-functional Agile/Scrum teams, reviewed 100+ code commits, and authored technical documentation covering 10+ enterprise modules.",
    ],
    tags: ["Java", "Spring Boot", "IAM", "RBAC", "OAuth2", "JWT", "Python", "CI/CD"],
  },
  {
    role: "Software Developer Intern",
    company: "Nokia Solutions",
    period: "Aug 2024 – May 2025",
    location: "On-site, India",
    type: "Internship",
    color: "accent",
    points: [
      "Contributed to 3+ IAM module features covering authentication, access control, privilege management, and RBAC, securing systems for 5+ enterprise client environments.",
      "Identified and resolved 20+ backend and identity-related defects, improving application stability by 25% and reducing average incident response time by 40%.",
      "Designed and automated 30+ API test cases using Java for authentication and access management modules, improving test coverage.",
    ],
    tags: ["Java", "Spring Security", "IAM", "REST API", "NIAM", "Testing"],
  },
];

const education = {
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  university: "Chandigarh University",
  period: "Aug 2021 – Jul 2025",
  cgpa: "8.5 / 10",
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="py-20">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-dark-border" />

          <div className="space-y-10 pl-12 sm:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-10 sm:-left-14 top-1 w-4 h-4 rounded-full border-2 ${
                    exp.color === "primary"
                      ? "border-primary bg-primary/20"
                      : "border-accent bg-accent/20"
                  }`}
                />

                <div className="glass-card p-6 hover:border-primary/30 transition-all">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <FiBriefcase
                          className={
                            exp.color === "primary" ? "text-primary" : "text-accent"
                          }
                          size={16}
                        />
                        {exp.role}
                      </h3>
                      <p className="text-slate-300 font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <span
                      className={`badge ${
                        exp.color === "primary"
                          ? "bg-primary/10 border border-primary/30 text-primary"
                          : "bg-accent/10 border border-accent/30 text-accent"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-10 sm:-left-14 top-1 w-4 h-4 rounded-full border-2 border-green-500 bg-green-500/20" />
              <div className="glass-card p-6 hover:border-green-500/30 transition-all">
                <p className="text-xs text-green-400 font-mono mb-2 uppercase tracking-wider">
                  🎓 Education
                </p>
                <h3 className="text-lg font-bold text-slate-100">{education.degree}</h3>
                <p className="text-slate-300 font-medium">{education.university}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={13} /> {education.period}
                  </span>
                  <span className="badge bg-green-500/10 border border-green-500/30 text-green-400">
                    CGPA {education.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
