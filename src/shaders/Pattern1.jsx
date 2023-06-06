import React, { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import patternVertexShader from "./patternVertex.glsl";
import patternFragmentShader from "./patternFragment.glsl";

const Pattern1 = () => {
  const PatternMaterial = shaderMaterial(
    { time: 0 },
    patternVertexShader,
    patternFragmentShader
  );

  const materialRef = useRef();

  useFrame((state, delta) => {
    materialRef.current.time += delta;
  });

  extend({ PatternMaterial });

  return (
    <group rotation-y={-Math.PI / 2} scale={1.5} position-y={-0.25}>
      <mesh>
        <sphereGeometry />
        <patternMaterial ref={materialRef} />
      </mesh>
    </group>
  );
};

export default Pattern1;
