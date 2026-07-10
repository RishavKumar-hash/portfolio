import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMapPin, FiHome, FiMail, FiPhone, FiBookOpen, FiAward } from "react-icons/fi";
import ProfileImage from "./ProfileImage";

const info = [
  { icon: FiMapPin, label: "Current Location", value: "Noida, UP" },
  { icon: FiHome, label: "Hometown", value: "Sonepur, Bihar" },
  { icon: FiMail, label: "Email", value: "rishavkr5302@gmail.com", href: "mailto:rishavkr5302@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 9508843814", href: "tel:+919508843814" },
  { icon: FiBookOpen, label: "Education", value: "B.E. CS — Chandigarh University (CGPA 8.5)" },
  { icon: FiAward, label: "Certifications", value: "AWS Cloud Practitioner, Java (UC San Diego)" },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-5 p-4 glass-card">
                <div className="w-20 h-20 sm:w-24 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-primary/20 shadow-lg shadow-primary/10">
                  <ProfileImage className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Rishav Kumar</p>
                  <p className="text-sm text-slate-500">Backend Software Engineer</p>
                  <p className="text-xs text-slate-500 mt-2">Current Location: Noida, UP</p>
                  <p className="text-xs text-slate-500">Hometown: Sonepur, Bihar</p>
                </div>
              </div>

              <div className="space-y-5 text-slate-400 leading-relaxed text-[1.02rem]">
                <p>
                  I&apos;m a{" "}
                  <span className="text-slate-100 font-medium">Backend Software Engineer</span>{" "}
                  with 1+ year of hands-on experience building enterprise-grade security systems at{" "}
                  <span className="text-primary font-medium">Nokia via TCS</span>. My core focus is on{" "}
                  <span className="text-slate-100">IAM, OAuth2, JWT authentication, RBAC</span>, and
                  scalable <span className="text-slate-100">REST API development</span> using Java and
                  Spring Boot.
                </p>
                <p>
                  I&apos;ve resolved{" "}
                  <span className="text-primary font-medium">50+ critical production issues</span> across
                  authentication, access control, and REST API integrations while supporting 100+
                  enterprise clients. I also refactored Python CI/CD pipelines, reducing deployment time
                  by <span className="text-primary font-medium">30%</span>.
                </p>
                <p>
                  Outside work, I build full-stack projects — most notably{" "}
                  <span className="text-slate-100 font-medium">TaskHive</span>, a role-based project
                  management platform — and have published 2 research papers in{" "}
                  <span className="text-slate-100">Machine Learning and IoT domains</span>.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {info.map((item, i) => {
                const content = (
                  <>
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-slate-200 text-sm">{item.value}</p>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-3 p-4 glass-card group hover:border-primary/30 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 p-4 glass-card group hover:border-primary/30 transition-colors">
                        {content}
                      </div>
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
