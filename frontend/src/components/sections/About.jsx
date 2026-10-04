import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiHome, FiMail, FiPhone, FiBookOpen, FiAward, FiCheck, FiCopy } from "react-icons/fi";
import ProfileImage from "../ui/ProfileImage";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const info = [
    { icon: FiMapPin, label: "Current Location", value: "Noida, UP (NCR Region)" },
    { icon: FiHome, label: "Hometown", value: "Sonepur, Bihar" },
    {
      icon: FiMail,
      label: "Email Address",
      value: "rishavkr5302@gmail.com",
      action: () => copyToClipboard("rishavkr5302@gmail.com", "Email"),
      actionLabel: "Email",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 9508843814",
      action: () => copyToClipboard("+919508843814", "Phone"),
      actionLabel: "Phone",
    },
    { icon: FiBookOpen, label: "Education", value: "B.E. Computer Science — Chandigarh University (CGPA 8.5 / 10)" },
    { icon: FiAward, label: "Certifications", value: "AWS Certified Cloud Practitioner, Java Software Design (UC San Diego)" },
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
              <h2 className="section-title">Engineering Background & Core Focus</h2>
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
                  <p className="text-sm font-semibold text-cyan-400">Backend Software Engineer</p>
                  <p className="text-xs text-slate-400 mt-1">Nokia Solutions (via TCS Contractor)</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px]">
                      Noida, UP
                    </span>
                    <span className="badge bg-accent/10 border border-accent/30 text-accent text-[11px]">
                      Sonepur, Bihar
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base font-sans">
                <p>
                  I am a <span className="text-slate-100 font-bold">Backend Software Engineer</span> specializing in{" "}
                  <span className="text-cyan-400 font-semibold">Java, Spring Boot, Microservices, and Enterprise Identity & Access Management (IAM)</span>.
                  Currently at <span className="text-slate-100 font-semibold">Nokia via TCS</span>, I engineer mission-critical backend modules powering identity, authentication, and access control for over 100 enterprise clients.
                </p>

                <p>
                  With <span className="text-emerald-400 font-semibold">50+ critical production defect resolutions</span> under my belt, I excel at diagnosing complex REST API bottlenecks, OAuth2/JWT security tokens, RBAC permission grants, and Spring Security configurations in live enterprise environments.
                </p>

                <p>
                  Additionally, I refactored Python CI/CD pipeline scripts resulting in a{" "}
                  <span className="text-cyan-400 font-semibold">30% reduction in deployment time</span>. Beyond enterprise work, I build scalable full-stack applications (like <span className="text-slate-100 font-semibold">TaskHive</span>) and have authored 2 peer-reviewed research publications in Machine Learning & IoT.
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
