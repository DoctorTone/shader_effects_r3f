import React, { Suspense } from "react";
import { OrbitControls, Grid, Stage } from "@react-three/drei";
import Effect from "../effects/Effect.jsx";
import useStore from "../state/store.js";
import { Loading } from "../components/Loading.jsx";

const ThreeApp = () => {
  const activeEffect = useStore((state) => state.activeEffect);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Stage
          adjustCamera={2}
          intensity={0.5}
          shadows="contact"
          environment="city">
          <Effect name={activeEffect} />
        </Stage>
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
      </Suspense>
      <OrbitControls />
    </>
  );
};

export default ThreeApp;
