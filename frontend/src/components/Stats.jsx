import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Production Issues Fixed" },
  { value: 5, suffix: "+", label: "Backend Modules Built" },
  { value: 100, suffix: "+", label: "Enterprise Clients Served" },
  { value: 30, suffix: "%", label: "Deploy Time Reduced" },
  { value: 2, suffix: "", label: "Research Publications" },
];

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-14 border-y border-dark-border/60 bg-dark-card/20 backdrop-blur-sm">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center group"
          >
            <p className="text-3xl sm:text-4xl font-bold gradient-text tabular-nums">
              {inView ? (
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              ) : (
                `0${stat.suffix}`
              )}
            </p>
            <p className="text-xs text-slate-500 mt-2 font-medium group-hover:text-slate-400 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
