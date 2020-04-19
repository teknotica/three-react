import React, { Fragment, useState, useEffect, useRef } from 'react';
import Controls from './components/controls';
import useAnimation from './hooks/useAnimation';

const App = () => {
  const [currentGeometry, setCurrentGeometry] = useState('TorusBufferGeometry');
  const { renderer, setThreeGeometry } = useAnimation();
  const mountRef = useRef();

  useEffect(() => {
    mountRef.current.appendChild(renderer.domElement);
    setThreeGeometry(currentGeometry);
  }, [renderer.domElement, currentGeometry, setThreeGeometry]);

  return (
    <Fragment>
      <Controls 
        currentGeometry={currentGeometry} 
        setCurrentGeometry={setCurrentGeometry} 
      />
      <div ref={mountRef} />
    </Fragment>
  );
}

export default App;
