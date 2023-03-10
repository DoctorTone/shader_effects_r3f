import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";
import blockVertexShader from "./blockVertex.glsl";
import blockFragmentShader from "./blockFragment.glsl";

const BlockAnimation = () => {
  const BlockMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    blockVertexShader,
    blockFragmentShader
  );

  extend({ BlockMaterial });

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <blockMaterial />
    </mesh>
  );
};

export default BlockAnimation;
