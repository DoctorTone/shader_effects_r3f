import {Canvas} from "@react-three/fiber";
import ThreeApp from "./components/ThreeApp.jsx";
import Button from '@mui/material/Button';
import "./styles/styles.css"

function App() {

  return (
    <>
      <Canvas>
        <ThreeApp />
      </Canvas>
      <div id="title" className="panel">
        <Button variant="contained">Shaders</Button>
      </div>
      </>
  )
}

export default App
