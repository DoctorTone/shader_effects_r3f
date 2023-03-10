import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { SCENE } from "../config/Config.js";
import Effect from "../effects/Effect.jsx";
import useStore from "../state/store.js";

const ThreeApp = () => {
  const activeEffect = useStore((state) => state.activeEffect);

  return (
    <>
      <ambientLight intensity={SCENE.ambientIntensity} />
      <pointLight position={SCENE.lightPosition} />
      <Effect name={activeEffect} />
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
