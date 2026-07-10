import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import OpenToWorkBadge from "./OpenToWorkBadge";
import ProfileImage from "./ProfileImage";

const GITHUB_URL = "https://github.com/RishavKumar-hash";

const socialLinks = [
  { icon: FiGithub, href: GITHUB_URL, label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/rishavkr5302",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:rishavkr5302@gmail.com", label: "Email" },
];

const roles = [
  "Backend Software Engineer",
  "Java & Spring Boot Developer",
  "IAM Security Specialist",
  "OAuth2 / JWT Expert",
  "Cloud & DevOps Enthusiast",
  "Microservices Architect",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="section-wrapper w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <OpenToWorkBadge className="text-sm" />
              <p className="text-xs text-slate-500 mt-2 font-medium">
                Current Location: Noida, UP
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Hometown: Sonepur, Bihar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-400 text-lg mb-1">Hi there 👋, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="gradient-text">Rishav</span>
                <br />
                <span className="text-slate-100">Kumar</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-300 min-h-[2rem]"
            >
              <span className="text-primary font-mono text-base">{"<"}</span>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 45,
                  deleteSpeed: 20,
                }}
              />
              <span className="text-primary font-mono text-base">{"/>"}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 leading-relaxed max-w-lg text-base sm:text-[1.05rem]"
            >
              Building secure, scalable backend systems at{" "}
              <span className="text-slate-200 font-medium">Nokia via TCS</span>.
              1+ year of hands-on experience in{" "}
              <span className="text-primary font-medium">Java · Spring Boot · IAM · REST APIs</span>.
              Resolved 50+ critical production issues across 100+ enterprise clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Hire Me
              </a>
              <a href="/RishavKumar_SDE.pdf" download className="btn-ghost hidden sm:inline-flex">
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl border border-dark-border text-slate-400
                             hover:border-primary hover:text-primary hover:bg-primary/5
                             transition-all duration-200 hover:scale-110"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex justify-center lg:justify-end relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl blur-2xl scale-105 animate-pulse-slow" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/25 h-full shadow-2xl shadow-primary/15 ring-1 ring-white/5">
                <ProfileImage />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 glass-card px-4 py-3 shadow-xl"
              >
                <p className="text-xs text-slate-400">Currently at</p>
                <p className="text-sm font-bold text-slate-100">Nokia via TCS</p>
                <p className="text-xs text-primary font-medium">System Engineer</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-gradient-to-br from-primary to-accent rounded-2xl px-4 py-3 shadow-xl"
              >
                <p className="text-2xl font-bold text-white">1+</p>
                <p className="text-xs text-blue-100 font-medium">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-slate-500 mt-16 sm:mt-20"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
