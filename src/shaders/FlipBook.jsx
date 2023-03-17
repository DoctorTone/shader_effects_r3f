import React, { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import flipVertexShader from "./flipVertex.glsl";
import flipFragmentShader from "./flipFragment.glsl";

const FLIP_TIME = 0.01;
const TEXTURE_WIDTH = 5;
const TEXTURE_HEIGHT = 5;

const FlipBook = () => {
  const flipTexture = useTexture("./src/assets/fire.jpg");

  const materialRef = useRef();
  const elapsedTime = useRef(0);
  const currentCell = useRef(new THREE.Vector2());

  const FlipMaterial = shaderMaterial(
    {
      cell: new THREE.Vector2(),
      map: new THREE.Texture(),
    },
    flipVertexShader,
    flipFragmentShader
  );

  useFrame((state, delta) => {
    elapsedTime.current += delta;
    if (elapsedTime.current >= FLIP_TIME) {
      if (++currentCell.current.x > TEXTURE_WIDTH) {
        currentCell.current.x = 0;
        if (++currentCell.current.y > TEXTURE_HEIGHT) {
          currentCell.current.y = 0;
        }
      }
      materialRef.current.cell.x = currentCell.current.x;
      materialRef.current.cell.y = currentCell.current.y;
      elapsedTime.current = 0;
    }
  });

  extend({ FlipMaterial });

  return (
    <mesh>
      <planeGeometry args={[3, 3]} />
      <flipMaterial ref={materialRef} map={flipTexture} />
    </mesh>
  );
};

export default FlipBook;
