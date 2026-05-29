import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingParticles = ({ count }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const values = [];
    for (let i = 0; i < count; i += 1) {
      values.push({
        x: (Math.random() - 0.5) * 22,
        y: (Math.random() - 0.5) * 18,
        z: (Math.random() - 0.5) * 22,
        size: Math.random() * 0.16 + 0.04,
      });
    }
    return values;
  }, [count]);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    particles.forEach((particle, index) => {
      positions[index * 3] = particle.x;
      positions[index * 3 + 1] = particle.y;
      positions[index * 3 + 2] = particle.z;
      sizes[index] = particle.size;
    });

    return { positions, sizes };
  }, [count, particles]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.00018;
      mesh.current.rotation.y += 0.00028;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={geometry.positions.length / 3}
          array={geometry.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={geometry.sizes.length}
          array={geometry.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        sizeAttenuation={true}
        color="#7fffd4"
        transparent
        opacity={0.78}
      />
    </points>
  );
};

export default FloatingParticles;
