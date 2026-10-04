export default function ScrollProgress() {
  return (
  <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-dark-border/50">
    <div
      id="scroll-progress"
      className="h-full bg-gradient-to-r from-primary via-accent to-primary origin-left scale-x-0 transition-transform duration-75"
      style={{ transformOrigin: "left" }}
    />
  </div>
  );
}
