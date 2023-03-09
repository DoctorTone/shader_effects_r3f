import { Canvas } from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import Title from "./UI/Title.jsx";

import "./styles/styles.css";

function App() {
  return (
    <>
      <Canvas>
        <ThreeApp />
      </Canvas>
      <Title />
    </>
  );
}

export default App;
