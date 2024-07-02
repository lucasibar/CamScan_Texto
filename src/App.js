// src/App.js
import React, { useEffect, useState } from 'react';
import CameraComponent from './CameraComponent';
import './App.css';

const App = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(()=>{
    console.log(photo)
  },[photo])

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Toma una Foto</h1>
        <CameraComponent onCapture={handleCapture} />
        {photo && (
          <div>
            <h2>Foto Capturada:</h2>
            <img src={photo} alt="Captured" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </header>
    </div>
  );
};

export default App;