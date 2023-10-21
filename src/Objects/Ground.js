import { RigidBody } from "@react-three/rapier";

export default function Ground() {
  return (
    <RigidBody colliders="cuboid" friction={0}>
      <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 8000]} />
        <meshLambertMaterial color="#ffffff" opacity={0.8} />
      </mesh>
    </RigidBody>
  );
}
