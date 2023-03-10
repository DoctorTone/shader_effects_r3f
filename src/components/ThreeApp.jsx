import * as THREE from "three";
import { OrbitControls, Grid } from "@react-three/drei";
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
      <Grid
        renderOrder={-1}
        position={[0, -2, 0]}
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={[0.5, 0.5, 10]}
        fadeDistance={60}
      />
    </>
  );
};

export default ThreeApp;
