/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icosahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function InteractiveShape() {
    const mesh = useRef<any>(null);

    useFrame(({ mouse }) => {
        if (!mesh.current) return;
        mesh.current.rotation.x = mouse.y * 1.2;
        mesh.current.rotation.y = mouse.x * 1.2;
    });

    return (
        <Icosahedron ref={mesh} args={[1.2, 0]}>
            <meshStandardMaterial color="#6366f1" />
        </Icosahedron>
    );
}
