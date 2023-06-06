import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import Title from "./UI/Title.jsx";
import EffectSelect from "./UI/EffectSelect.jsx";
import { SCENE } from "./config/Config.js";

import "./styles/styles.css";

function App() {
  return (
    <>
      <Canvas
        className="canvas3D"
        camera={{ position: SCENE.cameraPosition, fov: SCENE.fov }}>
        <ThreeApp />
      </Canvas>
      <EffectSelect />
      <Title />
    </>
  );
}

export default App;
