import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiFolder,
  FiMail,
  FiDownload,
  FiTerminal,
  FiShield,
  FiCheck,
  FiCopy,
} from "react-icons/fi";
import { SITE_EMAIL } from "../../config/site";

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, onOpenIam }) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === "Escape" && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    {
      title: "Jump to Home",
      section: "home",
      icon: FiHome,
      category: "Navigation",
      action: () => scrollToSection("home"),
    },
    {
      title: "Jump to About",
      section: "about",
      icon: FiUser,
      category: "Navigation",
      action: () => scrollToSection("about"),
    },
    {
      title: "Interactive IAM Security Playground",
      section: "iam-demo",
      icon: FiShield,
      category: "Interactive",
      action: () => {
        onClose(false);
        if (onOpenIam) onOpenIam();
        scrollToSection("iam-demo");
      },
    },
    {
      title: "Open Interactive RK-OS Terminal",
      section: "terminal",
      icon: FiTerminal,
      category: "Interactive",
      action: () => {
        onClose(false);
        if (onOpenTerminal) onOpenTerminal();
      },
    },
    {
      title: "Jump to Tech Stack & Skills",
      section: "skills",
      icon: FiCode,
      category: "Navigation",
      action: () => scrollToSection("skills"),
    },
    {
      title: "Jump to Enterprise Experience",
      section: "experience",
      icon: FiBriefcase,
      category: "Navigation",
      action: () => scrollToSection("experience"),
    },
    {
      title: "Jump to Projects Matrix",
      section: "projects",
      icon: FiFolder,
      category: "Navigation",
      action: () => scrollToSection("projects"),
    },
    {
      title: "Jump to Contact",
      section: "contact",
      icon: FiMail,
      category: "Navigation",
      action: () => scrollToSection("contact"),
    },
    {
      title: "Download Resume (PDF)",
      icon: FiDownload,
      category: "Actions",
      action: () => {
        const link = document.createElement("a");
        link.href = "/RishavKumar_SDE.pdf";
        link.download = "RishavKumar_SDE.pdf";
        link.click();
        onClose(false);
      },
    },
    {
      title: "Copy Email Address",
      icon: FiCopy,
      category: "Actions",
      action: () => {
        navigator.clipboard.writeText(SITE_EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const scrollToSection = (id) => {
    onClose(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose(false)}
            className="fixed inset-0 bg-dark/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-xl glass-card border border-dark-border shadow-2xl overflow-hidden z-10"
          >
            {/* Header / Search input */}
            <div className="flex items-center px-4 py-3 border-b border-dark-border bg-dark-card/90">
              <FiSearch className="text-primary text-lg mr-3" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or section name... (e.g. IAM, Projects, Terminal)"
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
              />
              <button
                onClick={() => onClose(false)}
                className="p-1 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-dark-border/50 transition-colors ml-2"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {copied && (
                <div className="flex items-center gap-2 p-2 px-3 text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl mb-1">
                  <FiCheck size={14} /> Email copied to clipboard!
                </div>
              )}
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-slate-500 text-sm">
                  No matching commands found for &quot;{query}&quot;
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-dark-border/60 text-slate-400 group-hover:text-primary group-hover:bg-primary/20 transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-200 group-hover:text-primary transition-colors">
                            {item.title}
                          </p>
                          <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 font-mono group-hover:text-primary">
                        ↵ Select
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-dark/90 border-t border-dark-border text-[11px] text-slate-500 font-mono">
              <span>Navigation & Commands</span>
              <div className="flex gap-2">
                <span><kbd className="px-1.5 py-0.5 rounded bg-dark-border text-slate-300">Esc</kbd> Close</span>
                <span><kbd className="px-1.5 py-0.5 rounded bg-dark-border text-slate-300">⌘K</kbd> Toggle</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
