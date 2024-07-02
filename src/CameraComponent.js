// src/CameraComponent.js
import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />
      <button onClick={capture}>Capturar Foto</button>
    </div>
  );
};

export default CameraComponent;