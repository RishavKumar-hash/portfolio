import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiMail, FiPhone, FiBookOpen, FiAward, FiCheck, FiCopy, FiFileText } from "react-icons/fi";
import ProfileImage from "../ui/ProfileImage";
import { SITE_EMAIL, SITE_PHONE } from "../../config/site";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const info = [
    { icon: FiMapPin, label: "Current Location", value: "Noida, UP, India" },
    {
      icon: FiMail,
      label: "Email Address",
      value: SITE_EMAIL,
      action: () => copyToClipboard(SITE_EMAIL, "Email"),
      actionLabel: "Email",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: SITE_PHONE,
      action: () => copyToClipboard(SITE_PHONE, "Phone"),
      actionLabel: "Phone",
    },
    { icon: FiBookOpen, label: "Education", value: "B.E. Computer Science — Chandigarh University (CGPA 8.5 / 10)" },
    { icon: FiAward, label: "Certifications", value: "Coursera/UCSD Java & DSA · AWS Cloud Practitioner · ML Intro" },
    { icon: FiFileText, label: "Publications", value: "Springer BIDA 2024 & Scopus Indexed Journal 2024" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
                ABOUT RISHAV
              </span>
              <h2 className="section-title">Professional Overview & Engineering Focus</h2>
            </div>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Bio Narrative (Left 7) */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed">
              <div className="flex items-center gap-5 p-4 glass-card border-cyan-500/30">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-cyan-500/30 shadow-glow">
                  <ProfileImage className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Rishav Kumar</h3>
                  <p className="text-sm font-semibold text-cyan-400">Software Engineer / System Engineer</p>
                  <p className="text-xs text-slate-400 mt-1">Nokia Solutions — Contractor via TCS</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px]">
                      Noida, India
                    </span>
                    <span className="badge bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
                      2+ Years Experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base font-sans">
                <p>
                  Software Engineer with <span className="text-slate-100 font-bold">2+ years of experience</span> developing and maintaining secure, scalable web applications, REST APIs, backend microservices, and developer automation for enterprise clients.
                </p>

                <p>
                  At <span className="text-cyan-400 font-semibold">Nokia Solutions (via TCS)</span>, I engineered and integrated <span className="text-slate-100 font-bold">5+ Java, Spring Boot, Spring Security, and REST microservices</span> supporting 100+ enterprise clients. I also refactored React/JavaScript network automation frontend interfaces across 6+ modules using React Query, Keycloak SSO, and role-based routing.
                </p>

                <p>
                  I bring strong hands-on expertise in <span className="text-emerald-400 font-semibold">IAM, AuthN/AuthZ, RBAC, JWT, OAuth2, Keycloak, input validation</span>, automated testing with JUnit & Mockito, root-cause analysis for 70+ production defects, and Python CI/CD pipeline automation (reducing deployment prep by ~30%).
                </p>
              </div>
            </div>

            {/* Information Grid Cards (Right 5) */}
            <div className="lg:col-span-5 space-y-3">
              {info.map((item, i) => {
                const Icon = item.icon;
                const isCopied = copiedField === item.actionLabel;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="glass-card p-4 hover:border-cyan-500/40 transition-all flex items-start justify-between group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          {item.label}
                        </p>
                        <p className="text-slate-200 text-xs sm:text-sm font-medium mt-0.5">{item.value}</p>
                      </div>
                    </div>

                    {item.action && (
                      <button
                        onClick={item.action}
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors flex-shrink-0"
                        title={`Copy ${item.actionLabel}`}
                      >
                        {isCopied ? <FiCheck className="text-emerald-400" size={16} /> : <FiCopy size={16} />}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
