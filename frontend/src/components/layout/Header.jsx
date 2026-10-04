import { useState, useEffect } from "react";
import { FiCode, FiMenu, FiX, FiDownload, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../config/site";

const navLinks = NAV_LINKS;

export default function Header({ onOpenCommand }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-dark-border/90 shadow-2xl shadow-black/40"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="Rishav Kumar home">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center group-hover:scale-105 transition-transform shadow-glow">
            <FiCode className="text-slate-950 text-xl font-bold" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">
              <span className="gradient-text">Rishav</span>
              <span className="text-slate-100">.dev</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Available for SDE Roles
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-card/60 border border-dark-border/60 p-1.5 rounded-2xl backdrop-blur-md" aria-label="Main navigation">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                  isActive ? "text-primary font-bold" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Interactive Triggers & Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-dark-border bg-dark-card/80 text-slate-400 hover:text-primary hover:border-primary/50 text-xs font-mono transition-all"
            title="Open Command Palette (Cmd+K)"
          >
            <FiSearch size={14} className="text-primary" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-dark-border/80 text-[10px] text-slate-300">⌘K</kbd>
          </button>

          {/* Download Resume */}
          <a
            href="/RishavKumar_SDE.pdf"
            download
            className="inline-flex items-center gap-2 btn-primary text-xs py-2 px-3.5"
          >
            <FiDownload size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-dark-border bg-dark-card text-slate-300 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-2xl border-b border-dark-border"
          >
            <nav className="px-4 py-4 flex flex-col gap-1.5" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-3 px-4 rounded-xl transition-all ${
                      active === id
                        ? "bg-primary/15 text-primary border border-primary/30"
                        : "text-slate-400 hover:bg-dark-card hover:text-slate-100"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenCommand();
                  }}
                  className="btn-outline text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <FiSearch size={14} /> Search & Commands (⌘K)
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
