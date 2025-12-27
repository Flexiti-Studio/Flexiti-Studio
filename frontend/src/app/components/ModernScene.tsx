import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

export default function ModernScene() {
    const group = useRef<any>(null);

    useFrame(({ mouse }) => {
        if (!group.current) return;
        group.current.rotation.x = mouse.y * 0.3;
        group.current.rotation.y = mouse.x * 0.3;
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[6, 6, 8]} intensity={1.5} color="#a78bfa" />
            <pointLight position={[-6, -4, 6]} intensity={1} color="#38bdf8" />

            <group ref={group} scale={1.25}>
                <Float speed={2} floatIntensity={1.8}>
                    <Torus args={[1.6, 0.26, 32, 100]}>
                        <meshStandardMaterial
                            color="#8b5cf6"
                            emissive="#8b5cf6"
                            emissiveIntensity={0.7}
                            roughness={0.18}
                            metalness={0.9}
                            side={THREE.DoubleSide} // ✅ Fix back face
                        />
                    </Torus>
                </Float>

                <Float speed={3} floatIntensity={2}>
                    <Sphere position={[1.9, 0.7, -0.6]} args={[0.55, 40, 40]}>
                        <meshStandardMaterial
                            transparent
                            opacity={0.32}
                            roughness={0}
                            side={THREE.DoubleSide} // ✅ Transparent sphere back
                        />
                    </Sphere>
                </Float>

                <Float speed={4} floatIntensity={2.4}>
                    <Sphere position={[-1.4, -1, 0.5]} args={[0.3, 32, 32]}>
                        <meshStandardMaterial
                            color="#38bdf8"
                            emissive="#38bdf8"
                            emissiveIntensity={1}
                            side={THREE.DoubleSide} // ✅ Neon orb back
                        />
                    </Sphere>
                </Float>
            </group>

            <EffectComposer>
                <Bloom intensity={1.1} luminanceThreshold={0.2} />
            </EffectComposer>
        </>
    );
}
