import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { StretchShader } from '../shaders/StretchShader';

export default function StretchPlane(props) {
  const material = useRef();

  useFrame(() => {
    // console.log('material:  ', material);
  });

  return (
    <mesh {...props}>
      <planeBufferGeometry
        attach="geometry"
        args={[1, 1, 32]}
      ></planeBufferGeometry>
      <shaderMaterial
        attach="material"
        ref={material}
        args={[StretchShader]}
      ></shaderMaterial>
    </mesh>
  );
}
