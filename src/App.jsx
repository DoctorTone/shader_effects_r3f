import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import Title from "./UI/Title.jsx";
import EffectSelect from "./UI/EffectSelect.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Canvas className="canvas3D">
        <ThreeApp />
      </Canvas>
      <EffectSelect />
      <Title />
    </>
  );
}

export default App;
