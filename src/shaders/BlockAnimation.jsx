import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";
import blockVertexShader from "./blockVertex.glsl";
import blockFragmentShader from "./blockFragment.glsl";

const BlockAnimation = () => {
  const texture = useTexture("./src/assets/wood.jpg");
  // const texture = useTexture("./src/assets/debra_weird.jpg");
  const BlockMaterial = shaderMaterial(
    {
      time: 0,
      amplitude: 0.25,
      frequency: 1.25,
      map: new THREE.Texture(),
    },
    blockVertexShader,
    blockFragmentShader
  );

  const materialRef = useRef();

  useFrame((state, delta) => {
    materialRef.current.time += delta;
  });

  extend({ BlockMaterial });

  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <blockMaterial ref={materialRef} map={texture} />
    </mesh>
  );
};

export default BlockAnimation;
