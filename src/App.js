import React, { useEffect, useState } from 'react';
import CameraComponent from './CameraComponent';
import './App.css';
import Tesseract from 'tesseract.js';

const App = () => {
  const [photo, setPhoto] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    if (photo) {
      recognizeText(photo);
    }
  }, [photo]);

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
  };

  const recognizeText = async (imageSrc) => {
    try {
      const { data: { text } } = await Tesseract.recognize(
        imageSrc,
        'eng',
        { logger: m => console.log(m) }
      );
      console.log(text)
      setRecognizedText(text);
    } catch (error) {
      console.error('Error en OCR:', error);
    }
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
            {recognizedText && (
              <div>
                <h3>Texto Reconocido:</h3>
                <p>{recognizedText}</p>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default App;