// import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { RigidBody, vec3 } from "@react-three/rapier";
import React, { useRef } from "react";
import { Vector3 } from "three";
import { useKeyboardControls } from "../hooks/useKeyboardControls";

const SPEED = 200;

export default function Player() {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight } =
    useKeyboardControls();

  /**
   * @property {RapierRigidBody} rigidBody
   */
  const rigidBody = useRef();

  useFrame(() => {
    if (rigidBody.current) {
      const position = vec3(rigidBody.current.translation());
      camera.position.set(position.x + 10, position.y + 35, position.z + 40);
      camera.lookAt(position);

      const direction = new Vector3();

      const frontVector = new Vector3(
        0,
        0,
        Number(moveBackward) - Number(moveForward)
      );
      const sideVector = new Vector3(
        Number(moveLeft) - Number(moveRight),
        0,
        0
      );

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED);

      // console.log(direction, direction.x, direction.y, direction.z);

      rigidBody.current.applyImpulse(direction, true);
      rigidBody.current.setLinearDamping(0.9);
    }
  });

  return (
    <>
      <RigidBody lockRotations position={[0, 0, 0]} ref={rigidBody}>
        <mesh>
          <boxGeometry args={[6, 5, 6]} />
          <meshStandardMaterial color={"gold"} />
        </mesh>
      </RigidBody>
    </>
  );
}
