import { lazy, Suspense } from "react";

const Scene3D = lazy(() => import("../three/Scene3D"));

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-dark" />

      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/60 to-dark" />
    </div>
  );
}
