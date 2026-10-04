import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShield, FiLock, FiKey, FiCheckCircle, FiPlay, FiRotateCcw, FiCode, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    step: 1,
    title: "1. Client Auth Challenge (OAuth2 + PKCE)",
    subtitle: "Initiating Authorization Code Flow",
    description:
      "Client app dispatches authorization request with client_id, code_challenge (SHA-256), and requested scope ('openid profile email').",
    reqHeader: "GET /oauth2/authorize?client_id=niam_portal&response_type=code&scope=openid",
    color: "from-blue-500 to-cyan-500",
    tech: "Spring Security OAuth2 Client",
  },
  {
    step: 2,
    title: "2. Identity Verification & Grant",
    subtitle: "Authentication Server Validation",
    description:
      "Spring Security Auth Server verifies user credentials against identity store, checks RBAC policies, and returns a single-use Authorization Code.",
    reqHeader: "HTTP/1.1 302 Found -> Location: https://app.nokia.com/callback?code=AUTH_CODE_9872",
    color: "from-violet-500 to-purple-500",
    tech: "Nokia NIAM Core Auth Engine",
  },
  {
    step: 3,
    title: "3. Cryptographic JWT Token Issuance",
    subtitle: "HMAC / RS256 JWT Generation",
    description:
      "Server exchanges Auth Code for a signed JWT Access Token embedded with custom roles (ROLE_ADMIN, ROLE_DEVELOPER) and expiration timestamps.",
    reqHeader: "POST /oauth2/token -> Returns Access Token & Refresh Token Pair",
    jwtPayload: {
      sub: "rishav.kumar@nokia.com",
      iss: "https://auth.niam.nokia.com",
      aud: "enterprise-microservices",
      roles: ["ROLE_ENGINEER", "ROLE_IAM_ADMIN"],
      exp: 1775892000,
      iat: 1775888400,
      tenantId: "NOKIA_ENTERPRISE_102",
    },
    color: "from-emerald-500 to-teal-500",
    tech: "Java Spring Boot JWT TokenProvider",
  },
  {
    step: 4,
    title: "4. RBAC Protected Endpoint Dispatch",
    subtitle: "Bearer Token Validation & Role Enforcement",
    description:
      "Resource Server intercepts incoming API calls with JwtAuthenticationFilter, verifies RSA signature key, and grants access to protected Spring Boot REST endpoint.",
    reqHeader: "GET /api/v1/iam/users -> 200 OK [Authorized via JwtSecurityContext]",
    color: "from-amber-500 to-orange-500",
    tech: "Spring Security Filter Chain & JPA",
  },
];

export default function IamPlayground() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const resetFlow = () => {
    setActiveStep(0);
    setIsPlaying(false);
  };

  const toggleAutoPlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2500);
    } else {
      setIsPlaying(false);
    }
  };

  const current = steps[activeStep];

  return (
    <section id="iam-demo" className="py-20 relative overflow-hidden bg-dark-card/40 border-y border-dark-border">
      <div className="section-wrapper relative z-10">
        <div className="section-header">
          <div>
            <div className="badge bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2">
              <FiShield size={13} /> Domain Specialization Showcase
            </div>
            <h2 className="section-title">Interactive Enterprise IAM Simulator</h2>
          </div>
          <div className="section-divider" />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Demonstration of an <span className="text-slate-200 font-medium">OAuth2 & JWT Authentication Flow</span> with
          Role-Based Access Control (RBAC), modeled after production security modules engineered at Nokia.
        </p>

        {/* Step Stepper Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {steps.map((s, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={s.step}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isActive
                    ? "bg-dark-card border-cyan-400/60 shadow-glow text-slate-100"
                    : "bg-dark/60 border-dark-border text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-step-glow"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-cyan-400"
                  />
                )}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-cyan-400">STEP 0{s.step}</span>
                  {isActive && <FiCheckCircle className="text-cyan-400" size={14} />}
                </div>
                <p className="text-xs font-semibold truncate">{s.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Active Step Visualizer Card */}
        <div className="glass-card p-6 sm:p-8 border border-dark-border relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <FiLock size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{current.title}</h3>
                <span className="text-xs font-mono text-cyan-400">{current.tech}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={nextStep}
                className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <FiArrowRight size={14} />
              </button>
              <button
                onClick={toggleAutoPlay}
                className={`text-xs py-2 px-3 rounded-xl border flex items-center gap-1.5 transition-all font-semibold ${
                  isPlaying
                    ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 animate-pulse"
                    : "bg-dark-card border-dark-border text-slate-300 hover:border-cyan-500/50"
                }`}
              >
                <FiPlay size={13} />
                {isPlaying ? "Simulating..." : "Auto Run"}
              </button>
              <button
                onClick={resetFlow}
                className="p-2 rounded-xl border border-dark-border text-slate-400 hover:text-slate-200 hover:bg-dark-border/40 transition-colors"
                title="Reset Flow"
              >
                <FiRotateCcw size={16} />
              </button>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            {current.description}
          </p>

          {/* Protocol Trace Box */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5">
                <FiCode size={14} className="text-cyan-400" /> Protocol HTTP Request Trace:
              </div>
              <div className="p-3.5 rounded-xl bg-dark/90 border border-dark-border text-xs font-mono text-cyan-300 overflow-x-auto">
                <code>{current.reqHeader}</code>
              </div>
            </div>

            {/* JWT Json Payload viewer if step 3 */}
            <AnimatePresence mode="wait">
              {current.jwtPayload && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2 text-emerald-400">
                      <FiKey size={14} /> Decoded JWT Claims Payload (RS256 Verified):
                    </span>
                    <span className="text-[10px] text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      Signature Valid
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#070d19] border border-emerald-500/30 text-xs font-mono text-emerald-400 overflow-x-auto">
                    {JSON.stringify(current.jwtPayload, null, 2)}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
