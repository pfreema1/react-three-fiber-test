import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { StretchShader } from '../shaders/StretchShader';
import * as THREE from 'three';

export default function StretchPlane(props) {
  const material = useRef();

  const { clock } = useThree();

  useFrame(() => {
    // console.log('material:  ', material);
    material.current.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh {...props}>
      <planeBufferGeometry
        attach="geometry"
        args={[1, 1, 32, 32]}
      ></planeBufferGeometry>
      <shaderMaterial
        attach="material"
        ref={material}
        args={[StretchShader]}
        side={THREE.DoubleSide}
        uniforms-uTime-value={0.0}
      ></shaderMaterial>
    </mesh>
  );
}
