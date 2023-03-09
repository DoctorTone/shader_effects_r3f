import * as THREE from "three";
import { Box } from "./Box.jsx";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../config/Config.js";

const ThreeApp = () => {
  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Box />
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
