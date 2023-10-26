import { extend, useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React from "react";
import * as THREE from "three";
import { FontLoader, TextGeometry } from "three-stdlib";
import { letterMultiplier } from "../utils/texthelpers";
/**
 *
 * @param {String} text
 * @param {THREE.Vector3} position
 * @returns
 */
export default function Text({ text, position, props }) {
  extend({ TextGeometry });
  const font = useLoader(
    FontLoader,
    `${process.env.PUBLIC_URL}/assets/fonts/Roboto_Bold.json`
  );
  const spacing = 11;

  const meshes = text.split("").map(
    (t) =>
      new THREE.Mesh(
        new TextGeometry(t, {
          font,
          size: 8,
          height: 4,
          bevelEnabled: true,
          bevelThickness: 0.5,
          bevelSize: 0.5,
        }),
        new THREE.MeshLambertMaterial({ color: "#4285F4" })
      )
  );
  console.log(position, position.x, text, meshes);

  position = position || new THREE.Vector3(0, 0, 0);

  return (
    <>
      {meshes.map((mesh, i) => (
        <RigidBody
          key={mesh.uuid}
          colliders="cuboid"
          position={[
            position.x + i * (spacing * letterMultiplier(text[i - 1] ?? " ")),
            position.y + i * 0,
            position.z + i * 0,
          ]}
          {...props}
        >
          <primitive object={mesh} />
        </RigidBody>
      ))}
    </>
  );
}
