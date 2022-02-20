/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/work-place.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftWall.geometry}
        material={nodes.LeftWall.material}
        position={[-0.06, 0, -0.04]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials['Material.001']}
        position={[-0.06, 0, -0.04]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightWall.geometry}
        material={nodes.RightWall.material}
        position={[-0.06, 0, -0.04]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        position={[-2.12, 0.02, 2.08]}
        scale={4.7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Countertop.geometry}
        material={materials.Слолешница}
        position={[-1.48, 3.18, 4.94]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.79, 4.35, 2.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.004']}
        position={[-1.49, 3.91, 6.11]}
        scale={[-0.06, 0.59, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.005']}
        position={[-1.48, 4.59, 5.97]}
        scale={[1.64, 0.83, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.007']}
        position={[-1.48, 4.59, 5.97]}
        scale={[1.64, 0.83, -0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={nodes.Base001.material}
        position={[-5.8, 1.58, 4.92]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={2.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoxTop001.geometry}
        material={nodes.BoxTop001.material}
        position={[-5.8, 2.85, 3.62]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.22, 2.19, 2.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoxBottom001.geometry}
        material={nodes.BoxBottom001.material}
        position={[-5.8, 1.85, 3.62]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.22, 2.19, 2.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
        position={[2.88, 1.58, 4.92]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={2.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoxTop.geometry}
        material={nodes.BoxTop.material}
        position={[2.88, 2.85, 3.62]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.22, 2.19, 2.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BoxBottom.geometry}
        material={nodes.BoxBottom.material}
        position={[2.88, 1.85, 3.62]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[2.22, 2.19, 2.44]}
      />
    </group>
  );
}

useGLTF.preload('/work-place.glb');