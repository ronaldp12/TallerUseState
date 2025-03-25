import React, { useState, useRef } from 'react';

export const SecondsCounter = () => {
  const [segundos, setSegundos] = useState(0);
  const intervalRef = useRef(null);

  const iniciarContador = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
  };

  const pararContador = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSegundos(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Segundos: {segundos}</h1>
      <button onClick={iniciarContador}>Iniciar</button>
      <button onClick={pararContador} style={{ marginLeft: '10px' }}>
        Parar
      </button>
    </div>
  );
};