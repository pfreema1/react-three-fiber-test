import React from 'react';
import { Canvas } from 'react-three-fiber';
import StretchPlane from './components/StretchPlane';

function App() {
  const onWheel = e => {
    console.log(e.deltaY);
  };

  return (
    <Canvas onWheel={e => onWheel(e)}>
      <StretchPlane></StretchPlane>
    </Canvas>
  );
}

export default App;
