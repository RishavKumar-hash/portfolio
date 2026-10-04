import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink, FiCheckCircle } from "react-icons/fi";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    id: "CLF-C02",
    badge: "☁️",
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    verify: "https://aws.amazon.com/certification/",
    skills: ["Cloud Computing", "AWS Core Services", "Security & Compliance", "IAM Policies"],
  },
  {
    title: "Java Programming: Principles of Software Design",
    issuer: "UC San Diego (Coursera)",
    year: "2024",
    id: "Specialization Credential",
    badge: "☕",
    color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    verify: "https://www.coursera.org/",
    skills: ["Java OOP", "Software Architecture", "Design Patterns", "Data Structures"],
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-20">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
              VERIFIED CREDENTIALS
            </span>
            <h2 className="section-title">Professional Certifications</h2>
          </div>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card p-6 border-dark-border hover:border-cyan-500/40 hover:shadow-glow transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-2xl bg-dark/60 border border-dark-border">
                      {cert.badge}
                    </span>
                    <div>
                      <span className={`badge text-[10px] font-mono font-bold uppercase ${cert.color}`}>
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mt-1">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <FiAward className="text-cyan-400 flex-shrink-0" size={20} />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="badge bg-dark border border-dark-border text-slate-300 text-xs font-mono">
                    Year: {cert.year}
                  </span>
                  <span className="badge bg-dark border border-dark-border text-cyan-400 text-xs font-mono">
                    ID: {cert.id}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="skill-chip text-xs">
                      <FiCheckCircle size={11} className="text-cyan-400" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-dark-border/60">
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
                >
                  <FiExternalLink size={13} /> Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
