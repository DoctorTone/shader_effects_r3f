import React, { useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial, useTexture } from "@react-three/drei";
import holeVertexShader from "./holeVertex.glsl";
import holeFragmentShader from "./holeFragment.glsl";

const Holes = () => {
  const texture = useTexture("./assets/brick_wall.jpg");
  const materialRef = useRef();
  const HoleMaterial = shaderMaterial(
    {
      holeSize: new THREE.Vector2(0.5, 0.5),
      map: new THREE.Texture(),
    },
    holeVertexShader,
    holeFragmentShader
  );

  extend({ HoleMaterial });

  return (
    <mesh>
      <boxGeometry args={[3, 3, 0.1]} />
      <holeMaterial ref={materialRef} side={THREE.DoubleSide} map={texture} />
    </mesh>
  );
};

export default Holes;
