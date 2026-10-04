import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiX, FiMinus, FiSquare } from "react-icons/fi";
import { SITE_EMAIL } from "../../config/site";

export default function TerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "RK-OS v2.4 (x86_64-java-spring-linux)\nType 'help' to view available recruiter CLI commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { type: "user", text: `$ ${input}` }];

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      if (cmd === "exit") {
        onClose();
        setInput("");
        return;
      }

      let responseText = "";
      switch (cmd) {
        case "help":
          responseText = `Available commands:
  bio        - Read Rishav's profile summary
  skills     - List backend, cloud & security skill matrix
  experience - View Nokia (TCS) System Engineer achievements
  projects   - Show key project highlights (TaskHive, College Reviewer)
  contact    - Get direct phone & email
  sudo hire  - Fast-track recruiter action
  clear      - Clear terminal screen
  exit       - Close terminal window`;
          break;
        case "bio":
        case "about":
          responseText = `Rishav Kumar | Backend Software Engineer
Current Location: Noida, UP | Hometown: Sonepur, Bihar
Education: B.E. CS @ Chandigarh University (CGPA 8.5)
Specialization: Java, Spring Boot, Enterprise IAM, OAuth2/JWT, REST APIs.
Proven impact: 50+ critical production issues resolved across 100+ enterprise clients.`;
          break;
        case "skills":
          responseText = `CORE TECH STACK MATRIX:
  Languages: Java, Python, SQL, JavaScript, C++
  Frameworks: Spring Boot, Spring Security, Spring MVC, REST APIs, JPA/Hibernate
  Databases: PostgreSQL, MySQL, MariaDB
  Security/IAM: OAuth2, JWT, RBAC, NIAM Security Protocols
  Cloud/DevOps: AWS, Docker, Git, CI/CD Pipelines, Linux`;
          break;
        case "experience":
          responseText = `ENTERPRISE EXPERIENCE:
  1. System Engineer @ Nokia Solutions (via TCS) [Jul 2025 - Present]
     - Engineered 5+ IAM security modules (Java/Spring Boot).
     - Resolved 50+ enterprise production tickets.
     - Sped up CI/CD deployment pipeline by 30%.
  2. Software Developer Intern @ Nokia Solutions [Aug 2024 - May 2025]
     - Built RBAC authentication features & automated 30+ Java REST API test suites.`;
          break;
        case "projects":
          responseText = `FEATURED PROJECTS:
  1. TaskHive (Jan 2026): Spring Boot & React platform with RBAC & JWT managing 10+ concurrent projects.
  2. College Reviewer (Jul 2024): Python recommendation engine reducing user search time by 35%.
  3. CourseBuilder (May 2024): React web application with file upload & drag-and-drop course module builder.`;
          break;
        case "contact":
          responseText = `CONTACT DETAILS:
  Email: ${SITE_EMAIL}
  Phone: +91 9508843814
  LinkedIn: linkedin.com/in/rishavkr5302
  GitHub: github.com/RishavKumar-hash`;
          break;
        case "sudo hire":
          responseText = `[SUCCESS] Access Granted! 🚀
Thank you for your interest! Rishav is actively interviewing for Software Engineer / Backend SDE roles.
Please email directly at ${SITE_EMAIL} or call +91 9508843814 to schedule an interview.`;
          break;
        case "":
          responseText = "";
          break;
        default:
          responseText = `Command not recognized: '${cmd}'. Type 'help' for a list of valid commands.`;
          break;
      }

      if (responseText) {
        newHistory.push({ type: "output", text: responseText });
      }
      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 font-mono"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-dark-border select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs text-slate-400 font-semibold ml-2 flex items-center gap-1.5">
                  <FiTerminal className="text-cyan-400" /> rishav@rk-os:~
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <FiMinus className="hover:text-slate-300 cursor-pointer" />
                <FiSquare className="hover:text-slate-300 cursor-pointer text-[10px]" />
                <FiX className="hover:text-slate-300 cursor-pointer text-sm" onClick={onClose} />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4 h-96 overflow-y-auto space-y-3 text-xs sm:text-sm leading-relaxed">
              {history.map((h, i) => (
                <div key={i}>
                  {h.type === "system" && (
                    <div className="text-cyan-400/90 bg-cyan-950/20 p-2.5 rounded-lg border border-cyan-500/20 whitespace-pre-wrap">
                      {h.text}
                    </div>
                  )}
                  {h.type === "user" && (
                    <div className="text-slate-200 font-bold flex items-center gap-2">
                      <span className="text-cyan-400">rishav@rk-os:~$</span>
                      <span>{h.text.replace("$ ", "")}</span>
                    </div>
                  )}
                  {h.type === "output" && (
                    <div className="text-slate-300 pl-4 border-l-2 border-primary/40 whitespace-pre-wrap py-1">
                      {h.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input Footer */}
            <div className="flex items-center px-4 py-3 bg-[#0d1424] border-t border-dark-border">
              <span className="text-cyan-400 text-xs font-bold mr-2">rishav@rk-os:~$</span>
              <input
                type="text"
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type 'help'..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-600 text-xs focus:outline-none font-mono"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
