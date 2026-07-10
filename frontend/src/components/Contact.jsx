import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiPhone, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import axios from "axios";
import ProfileImage from "./ProfileImage";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "rishavkr5302@gmail.com", href: "mailto:rishavkr5302@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+91 9508843814", href: "tel:+919508843814" },
  { icon: FiGithub, label: "GitHub", value: "github.com/RishavKumar-hash", href: "https://github.com/RishavKumar-hash" },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/rishavkr5302", href: "https://linkedin.com/in/rishavkr5302" },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

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
          "https://formsubmit.co/ajax/rishavkr5302@gmail.com",
          {
            name: data.name,
            email: data.email,
            subject: data.subject || "Portfolio Contact",
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
    <section id="contact" className="py-20">
      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-primary/20 flex-shrink-0">
                  <ProfileImage className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">Rishav Kumar</p>
                  <p className="text-xs text-slate-500 mt-1">Current Location: Noida, UP</p>
                  <p className="text-xs text-slate-500">Hometown: Sonepur, Bihar</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-3">
                Let&apos;s work together!
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Have an exciting role, project, or just want to connect? Drop me a message —
                I respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 glass-card hover:border-primary/40 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-6 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "At least 2 characters" } })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                  })}
                  placeholder="john@company.com"
                  type="email"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="Job Opportunity / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "At least 10 characters" } })}
                  placeholder="Tell me about the role or project..."
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark border border-dark-border text-slate-200 placeholder-slate-600
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                  className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <FiCheckCircle size={16} />
                  Message sent! I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  <FiAlertCircle size={16} />
                  Something went wrong. Please email me directly at rishavkr5302@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
