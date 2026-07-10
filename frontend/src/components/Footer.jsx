import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import ProfileImage from "./ProfileImage";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border/60 bg-dark-card/40 backdrop-blur-sm py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/20 flex-shrink-0">
              <ProfileImage className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <span className="font-bold text-slate-300 block">
                <span className="gradient-text">Rishav Kumar</span>
              </span>
              <p className="text-xs text-slate-600 mt-1">Backend Software Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: "https://github.com/RishavKumar-hash", label: "GitHub" },
              { icon: FiLinkedin, href: "https://linkedin.com/in/rishavkr5302", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:rishavkr5302@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-primary/10 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {new Date().getFullYear()} Rishav Kumar · Built with
            <FiHeart className="text-red-500/70 inline" size={12} />
            React + Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
}
