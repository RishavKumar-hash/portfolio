import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    id: "CLF-C02",
    color: "from-orange-500 to-amber-500",
    badge: "☁️",
    verify: "https://aws.amazon.com/certification/",
  },
  {
    title: "Java Programming: Principles of Software Design",
    issuer: "UC San Diego (Coursera)",
    year: "2024",
    id: "Specialization",
    color: "from-blue-500 to-cyan-500",
    badge: "☕",
    verify: "https://www.coursera.org/",
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-20">
      <div className="section-wrapper" ref={ref}>
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{cert.badge}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-100 leading-snug group-hover:gradient-text transition-all">
                      {cert.title}
                    </h3>
                    <FiAward className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{cert.issuer}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="badge bg-primary/10 border border-primary/20 text-primary text-xs">
                      {cert.year}
                    </span>
                    <span className="badge bg-dark border border-dark-border text-slate-400 text-xs font-mono">
                      {cert.id}
                    </span>
                  </div>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-slate-500 hover:text-primary transition-colors"
                  >
                    <FiExternalLink size={12} />
                    View credential
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
