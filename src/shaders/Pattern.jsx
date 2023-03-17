import React, { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import patternVertexShader from "./patternVertex.glsl";
import patternFragmentShader from "./patternFragment.glsl";

const Pattern = () => {
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
    <mesh>
      <sphereGeometry />
      <patternMaterial ref={materialRef} />
    </mesh>
  );
};

export default Pattern;
