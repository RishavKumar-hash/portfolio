export default function OpenToWorkBadge({ className = "", compact = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                  bg-green-500/10 border border-green-500/30 text-green-400
                  shadow-sm shadow-green-500/10 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
      {compact ? "Open to work" : "Open to opportunities"}
    </span>
  );
}
