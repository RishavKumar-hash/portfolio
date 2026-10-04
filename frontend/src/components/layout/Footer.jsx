import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";
import ProfileImage from "../ui/ProfileImage";
import { SITE_EMAIL, SOCIAL } from "../../config/site";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card/60 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-center justify-between">
          {/* Col 1 */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 shadow-glow">
              <ProfileImage className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <span className="font-extrabold text-slate-100 text-base block leading-tight">
                <span className="gradient-text">Rishav Kumar</span>
              </span>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">Backend Software Engineer</p>
              <p className="text-[10px] text-slate-400">Noida, UP | Sonepur, Bihar</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex items-center justify-center gap-3">
            {[
              { icon: FiGithub, href: SOCIAL.github, label: "GitHub" },
              { icon: FiLinkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${SITE_EMAIL}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-dark-border text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          {/* Col 3 */}
          <div className="text-center sm:text-right">
            <p className="text-xs text-slate-400 font-mono flex items-center justify-center sm:justify-end gap-1.5">
              <FiCode className="text-cyan-400" /> Java · Spring Boot · IAM · React
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              © {new Date().getFullYear()} Rishav Kumar. Engineered for Peak Recruiter Impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
