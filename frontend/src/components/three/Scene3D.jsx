import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function WireCore() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.x = state.clock.elapsedTime * 0.12;
    group.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial color="#3b82f6" wireframe emissive="#2563eb" emissiveIntensity={0.35} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[2.1, 0.02, 8, 64]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1}>
        <mesh position={[2.4, -0.8, -1]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#06b6d4" wireframe opacity={0.7} transparent />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 8, 6]} intensity={1.2} color="#60a5fa" />
      <pointLight position={[-6, -4, 2]} intensity={0.6} color="#a78bfa" />
      <Stars radius={80} depth={40} count={1200} factor={3} saturation={0} fade speed={0.8} />
      <WireCore />
    </Canvas>
  );
}
