import React from 'react';

const SecondsCounter = ({ seconds }) => {
  // Convert seconds to string and pad with zeros up to 6 digits
  const paddedSeconds = seconds.toString().padStart(6, '0').split('');

  return (
    <div className="seconds-counter">
      <div className="icon"><i className="far fa-clock"></i></div>
      {paddedSeconds.map((digit, index) => (
        <div key={index} className="digit">{digit}</div>
      ))}
    </div>
  );
};

export default SecondsCounter;


// 📝 Instrucciones
// Crea un componente de contador de segundos, llamado SecondsCounter. Debería verse como este.

// El propósito principal del componente es mostrar cuántos segundos han pasado desde que el sitio web terminó de cargarse (onLoad).
// Usa ReactDOM.createRoot() para representar el componente en la aplicación web.
// Usa la función setInterval() para volver a renderizar el componente cada segundo.
// El componente no necesita un estado local, puede pasar la cantidad de segundos como props de la siguiente manera:
// <SecondsCounter seconds={3434} />