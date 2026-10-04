import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FiCheckCircle, FiShield, FiUsers, FiZap, FiCheckSquare, FiBookOpen } from "react-icons/fi";

const stats = [
  { value: 2, suffix: "+", label: "Years Enterprise Exp", icon: FiShield, color: "text-cyan-400" },
  { value: 70, suffix: "+", label: "Production Defects Resolved", icon: FiCheckCircle, color: "text-emerald-400" },
  { value: 100, suffix: "+", label: "Enterprise Clients Supported", icon: FiUsers, color: "text-accent" },
  { value: 30, suffix: "%", label: "CI/CD Prep Speedup", icon: FiZap, color: "text-cyan-400" },
  { value: 30, suffix: "+", label: "Automated API Test Suites", icon: FiCheckSquare, color: "text-emerald-400" },
  { value: 2, suffix: "", label: "Research Publications", icon: FiBookOpen, color: "text-amber-400" },
];

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-12 border-y border-dark-border/80 bg-dark-card/40 backdrop-blur-md">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-4 text-center group hover:border-cyan-500/40 hover:shadow-glow transition-all"
            >
              <div className="flex justify-center mb-1.5">
                <div className={`p-2 rounded-xl bg-dark/60 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono tracking-tight tabular-nums">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium group-hover:text-slate-200 transition-colors leading-tight">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
