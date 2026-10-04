import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
  FiTerminal,
  FiShield,
  FiCheck,
  FiCopy,
  FiBriefcase,
  FiMapPin,
  FiHome,
} from "react-icons/fi";
import Typewriter from "typewriter-effect";
import ProfileImage from "../ui/ProfileImage";
import { SOCIAL, SITE_EMAIL } from "../../config/site";

const socialLinks = [
  { icon: FiGithub, href: SOCIAL.github, label: "GitHub" },
  { icon: FiLinkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: SOCIAL.email, label: "Email" },
];

const roles = [
  "Backend Software Engineer",
  "Java & Spring Boot Specialist",
  "Enterprise IAM Security Developer",
  "OAuth2 / JWT Architecture Expert",
  "Microservices & REST API Engineer",
];

export default function Hero({ onOpenTerminal, onOpenIam }) {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_EMAIL);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden cyber-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-primary/15 to-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-wrapper w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left col 7) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left">
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="badge bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
                Available for SDE & Backend Roles
              </div>
              <div className="badge bg-dark-card border border-dark-border text-slate-400 text-xs font-mono">
                <FiBriefcase className="text-cyan-400" /> Nokia Solutions (via TCS)
              </div>
            </motion.div>

            {/* Location Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5 bg-dark-card/60 px-2.5 py-1 rounded-lg border border-dark-border">
                <FiMapPin className="text-cyan-400" /> Noida, UP (Current)
              </span>
              <span className="flex items-center gap-1.5 bg-dark-card/60 px-2.5 py-1 rounded-lg border border-dark-border">
                <FiHome className="text-accent" /> Sonepur, Bihar (Hometown)
              </span>
            </motion.div>

            {/* Main Title Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-slate-400 text-base sm:text-lg font-mono mb-2">Hello, World 👋 I&apos;m</p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
                <span className="gradient-text">Rishav</span>{" "}
                <span className="text-slate-100">Kumar</span>
              </h1>
            </motion.div>

            {/* Typing Roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 text-lg sm:text-2xl font-mono font-semibold text-cyan-400 min-h-[2.5rem]"
            >
              <span className="text-slate-500 font-normal">{"<"}</span>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 25,
                }}
              />
              <span className="text-slate-500 font-normal">{"/>"}</span>
            </motion.div>

            {/* Executive Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans"
            >
              Engineered enterprise security modules & REST APIs at{" "}
              <span className="text-slate-100 font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                Nokia Solutions (via TCS)
              </span>
              . Resolved <span className="text-cyan-400 font-bold">50+ critical production issues</span> across 100+ enterprise client deployments and reduced CI/CD build cycles by{" "}
              <span className="text-emerald-400 font-bold">30%</span>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <button onClick={onOpenIam} className="btn-outline">
                <FiShield className="text-cyan-400" /> IAM Demo
              </button>
              <button
                onClick={onOpenTerminal}
                className="btn-outline font-mono text-xs text-cyan-400 border-cyan-500/40"
              >
                <FiTerminal /> CLI Mode
              </button>
            </motion.div>

            {/* Social Links & Quick Copy Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 pt-4 border-t border-dark-border/80"
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl border border-dark-border bg-dark-card/60 text-slate-400
                             hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-glow
                             transition-all duration-200 hover:scale-105"
                >
                  <s.icon size={18} />
                </a>
              ))}

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-dark-border bg-dark-card/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 text-xs font-mono transition-all"
              >
                {emailCopied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                <span>{emailCopied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </motion.div>
          </div>

          {/* Profile Card & Visual Badge (Right col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 group">
              {/* Outer ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-accent/40 rounded-3xl blur-2xl group-hover:scale-110 transition-transform duration-500" />

              {/* Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 bg-dark-card h-full shadow-2xl ring-1 ring-white/10 flex flex-col justify-end">
                <ProfileImage className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-card border-dark-border/80 backdrop-blur-md">
                  <p className="text-[11px] font-mono text-cyan-400 font-semibold">CURRENT ROLE</p>
                  <p className="text-sm font-bold text-slate-100">System Engineer @ Nokia</p>
                  <p className="text-xs text-slate-400">Contractor via TCS</p>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-primary rounded-2xl px-4 py-2.5 shadow-xl text-slate-950 border border-white/20"
              >
                <p className="text-xl font-extrabold leading-none">1+ Year</p>
                <p className="text-[10px] font-bold uppercase tracking-wider">Enterprise Exp.</p>
              </motion.div>

              {/* Floating Badge Bottom Left */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 shadow-xl border-cyan-500/40 text-left"
              >
                <p className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                  <FiShield className="text-cyan-400" /> IAM & Security
                </p>
                <p className="text-[10px] text-slate-400 font-mono">OAuth2 · JWT · RBAC</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-1.5 text-slate-500 mt-16"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={14} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
