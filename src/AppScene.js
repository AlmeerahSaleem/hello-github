import { SoftShadows } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Physics, vec3 } from "@react-three/rapier";
import { TextGeometry } from "three-stdlib";
import Ground from "./Objects/Ground";
import Player from "./Objects/Player";
import Text from "./Objects/Text";
import names from "./data/names";

export default function AppScene() {
  extend({ TextGeometry });

  return (
    <Physics gravity={[0, -18, 0]} debug={false}>
      <AppEnvironment />
      {/* <Text
        text={"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"}
        position={vec3({ x: -20, y: 1, z: -20 })}
      /> */}
      {names.map((text, i) => (
        <Text
          key={i}
          text={text}
          position={vec3({ x: 30 + -i * 20, y: i, z: -i * 20 })}
        />
      ))}
      <Player />
    </Physics>
  );
}

function AppEnvironment() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, -10]}
        shadow-mapSize={1024}
        castShadow
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-30, 30, 30, -30, 0.1, 200]}
        />
      </directionalLight>
      <SoftShadows size={30} />

      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Ground />
    </>
  );
}
