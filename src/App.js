import { Canvas } from "@react-three/fiber";
import AppScene from "./AppScene";

function App() {
  return (
    <Canvas shadows camera={{ fov: 70 }}>
      {/* <OrbitControls maxPolarAngle={Math.PI / 2} enableDamping={true} /> */}
      <AppScene />
    </Canvas>
  );
}

export default App;
