import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import holeVertexShader from "./holeVertex.glsl";
import holeFragmentShader from "./holeFragment.glsl";

const Holes = () => {
  const materialRef = useRef();
  const HoleMaterial = shaderMaterial({}, holeVertexShader, holeFragmentShader);

  extend({ HoleMaterial });

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <holeMaterial ref={materialRef} />
    </mesh>
  );
};

export default Holes;
