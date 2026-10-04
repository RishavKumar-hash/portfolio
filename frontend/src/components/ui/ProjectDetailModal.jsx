import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiLayers, FiCheckCircle } from "react-icons/fi";

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-card border border-dark-border shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-dark-border bg-dark-card/90">
            <div>
              <span className="text-xs text-primary font-mono font-bold uppercase tracking-wider">
                {project.date || "Project Deep Dive"}
              </span>
              <h3 className="text-2xl font-bold text-slate-100">{project.title || project.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-100 rounded-xl hover:bg-dark-border/50 transition-colors"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
            {/* Description */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Overview & Purpose
              </h4>
              <p className="leading-relaxed text-slate-200">{project.description}</p>
            </div>

            {/* Architectural Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <FiLayers className="text-primary" /> Key Technical Achievements
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-dark/60 border border-dark-border text-slate-300">
                      <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags &&
                  project.tags.map((tag) => (
                    <span key={tag} className="skill-chip">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 p-4 bg-dark/95 border-t border-dark-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs py-2 px-4 flex items-center gap-2"
              >
                <FiGithub size={16} /> GitHub Repo
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
              >
                <FiExternalLink size={16} /> Live Application
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
