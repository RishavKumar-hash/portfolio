import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiAlertCircle,
  FiCopy,
  FiCheck,
  FiClock,
} from "react-icons/fi";
import axios from "axios";
import ProfileImage from "../ui/ProfileImage";
import { SITE_EMAIL } from "../../config/site";

const contactInfo = [
  { icon: FiMail, label: "Email", value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  { icon: FiPhone, label: "Phone", value: "+91 9508843814", href: "tel:+919508843814" },
  { icon: FiGithub, label: "GitHub", value: "github.com/RishavKumar-hash", href: "https://github.com/RishavKumar-hash" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/rishavkr5302", href: "https://linkedin.com/in/rishavkr5302" },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitStatus(null);
    try {
      if (import.meta.env.DEV) {
        await axios.post("/api/contact", data);
      } else {
        await axios.post(
          `https://formsubmit.co/ajax/${SITE_EMAIL}`,
          {
            name: data.name,
            email: data.email,
            subject: data.subject || "Portfolio Contact Inquiry",
            message: data.message,
            _captcha: "false",
            _template: "table",
          },
          { headers: { "Content-Type": "application/json", Accept: "application/json" } }
        );
      }
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 block">
              INITIATE CONTACT
            </span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left - Contact info & profile summary (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 border-cyan-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 shadow-glow">
                  <ProfileImage className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Rishav Kumar</h3>
                  <p className="text-xs font-semibold text-cyan-400">Backend Software Engineer</p>
                  <p className="text-[11px] text-slate-400 mt-1">Noida, UP | Sonepur, Bihar</p>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Interested in discussing backend SDE roles, system engineering opportunities, or technical collaborations? Drop a message below — I respond within <span className="text-cyan-400 font-semibold">24 hours</span>.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/30">
                <FiClock size={14} /> Guaranteed Response Time: &lt; 24 Hours
              </div>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const isCopied = copiedField === item.label;

                return (
                  <div
                    key={item.label}
                    className="glass-card p-4 hover:border-cyan-500/40 transition-all flex items-center justify-between group"
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3.5 min-w-0"
                    >
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{item.label}</p>
                        <p className="text-slate-200 text-xs sm:text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>

                    {(item.label === "Email" || item.label === "Phone") && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors flex-shrink-0"
                        title={`Copy ${item.label}`}
                      >
                        {isCopied ? <FiCheck className="text-emerald-400" size={16} /> : <FiCopy size={16} />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-6 sm:p-8 space-y-5 border-dark-border"
            >
              <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>

              {/* Name */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  FULL NAME <span className="text-cyan-400">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "At least 2 characters" } })}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 text-sm font-sans transition-all"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  EMAIL ADDRESS <span className="text-cyan-400">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                  })}
                  placeholder="john@company.com"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 text-sm font-sans transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  SUBJECT
                </label>
                <input
                  {...register("subject")}
                  placeholder="Software Engineer Role / Project Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 text-sm font-sans transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  MESSAGE <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "At least 10 characters" } })}
                  placeholder="Share job specifications, team background, or technical inquiry..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 text-sm font-sans transition-all resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                ) : (
                  <FiSend size={16} />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
                >
                  <FiCheckCircle size={16} />
                  Message sent successfully! I will contact you within 24 hours.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono"
                >
                  <FiAlertCircle size={16} />
                  Submission error. Please email directly at {SITE_EMAIL}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
