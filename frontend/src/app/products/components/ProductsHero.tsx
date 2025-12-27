"use client";

import React, { useRef, useMemo } from "react";
import Button from "@/components/reuseables/Button";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

interface ProductsHeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

// --- Futuristic Tech Object with orbiting triangles ---
function FuturisticObject() {
  const mainRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  // Generate orbiting triangles
  const orbiting = useMemo(() => {
    const temp: THREE.Vector3[] = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      temp.push(new THREE.Vector3(Math.cos(angle) * 1.2, (Math.random() - 0.5) * 0.6, Math.sin(angle) * 1.2));
    }
    return temp;
  }, []);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    // Main floating & rotating object
    if (mainRef.current) {
      mainRef.current.rotation.y = t * 0.5 + mouse.x * 0.1;
      mainRef.current.rotation.x = Math.sin(t * 0.3) * 0.2 + mouse.y * 0.1;
      mainRef.current.position.y = Math.sin(t * 0.6) * 0.2;
    }

    // Orbiting triangles animation
    if (orbitRef.current) {
      orbitRef.current.rotation.y = t * 0.4;
      orbitRef.current.children.forEach((tri, idx) => {
        tri.position.y = Math.sin(t + idx) * 0.15;
        tri.rotation.x += 0.01;
        tri.rotation.y += 0.01;
      });
    }
  });

  return (
    <>
      {/* Main tech object: low-poly glowing tetrahedron */}
      <mesh ref={mainRef} scale={1.2}>
        <tetrahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {/* Orbiting triangles */}
      <group ref={orbitRef}>
        {orbiting.map((pos, idx) => (
          <mesh key={idx} position={pos} scale={0.15}>
            <coneGeometry args={[0.05, 0.12, 3]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

// --- ProductsHero Component ---
const ProductsHero: React.FC<ProductsHeroProps> = ({
  title = "The Future of Digital Interaction",
  subtitle = "Empowering users and businesses through intelligently crafted software, AI systems, and innovative hardware solutions.",
  buttonText = "Explore Our Solutions",
  buttonHref = "#products",
}) => {
  return (
    <div className="@container relative py-16 md:py-24 rounded-xl">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,11,30,0.6) 0%, rgba(10,11,30,0.95) 100%)",
        }}
      />

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
        {/* Left: Futuristic tech animation */}
        <div className="flex-1 relative h-[360px] md:h-[440px]">
          <Canvas
            className="!bg-transparent"
            camera={{ position: [0, 0, 4], fov: 50 }}
            gl={{ alpha: true }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
            <FuturisticObject />
            <EffectComposer>
              <Bloom intensity={1.2} luminanceThreshold={0.1} />
            </EffectComposer>
          </Canvas>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-left max-w-xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          <h2 className="text-white/80 text-base md:text-lg mt-3">
            {subtitle}
          </h2>
          <Button
            variant="primary"
            href={buttonHref}
            size="md"
            className="mt-6 hover:opacity-90 transition-opacity flex items-center gap-2"
            leftIcon={
              <span className="material-symbols-outlined text-sm">
                rocket_launch
              </span>
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
