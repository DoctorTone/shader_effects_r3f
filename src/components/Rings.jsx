import React, { useRef } from "react";
import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Rings = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 4;
  });

  return (
    <group position-y={1.5} ref={groupRef}>
      <Torus args={[1, 0.1]} rotation-x={Math.PI / 3}>
        <meshStandardMaterial color="hotpink" />
      </Torus>
      <Torus args={[1, 0.1]} position-y={-1.15} rotation-x={-Math.PI / 3}>
        <meshStandardMaterial color="hotpink" />
      </Torus>
    </group>
  );
};

export default Rings;
