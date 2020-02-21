import React from 'react';
import { Canvas, extend, useThree } from 'react-three-fiber';
import StretchPlane from './components/StretchPlane';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Scene() {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  return (
    <>
      <StretchPlane></StretchPlane>
      <orbitControls args={[camera, domElement]} />
    </>
  );
}

function App() {
  const onWheel = e => {
    console.log(e.deltaY);
  };

  return (
    <Canvas onWheel={e => onWheel(e)}>
      <Scene></Scene>
    </Canvas>
  );
}

export default App;
