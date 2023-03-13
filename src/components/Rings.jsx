import React from "react";
import { Torus } from "@react-three/drei";

const Rings = () => {
  return (
    <Torus args={[1, 0.1]} rotation-x={Math.PI / 3}>
      <meshStandardMaterial color="hotpink" />
    </Torus>
  );
};

export default Rings;
