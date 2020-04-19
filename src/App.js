import React, { useEffect, useRef } from 'react';
import useAnimation from './hooks/useAnimation';

const App = () => {
  const { renderer } = useAnimation();
  const mountRef = useRef();

  useEffect(() => {
    mountRef.current.appendChild(renderer.domElement);
  }, [renderer.domElement]);

  return (
    <div ref={mountRef} />
  );
}

export default App;
