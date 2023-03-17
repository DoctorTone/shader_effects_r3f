import React from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import flipVertexShader from "./flipVertex.glsl";
import flipFragmentShader from "./flipFragment.glsl";

const FlipBook = () => {
  const FlipMaterial = shaderMaterial({}, flipVertexShader, flipFragmentShader);

  extend({ FlipMaterial });

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <flipMaterial />
    </mesh>
  );
};

export default FlipBook;
