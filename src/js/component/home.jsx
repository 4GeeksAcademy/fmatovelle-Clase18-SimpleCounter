import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter';

const App = () => {
  // Estado para almacenar los segundos transcurridos
  const [seconds, setSeconds] = useState(0);

  // useEffect para iniciar el contador cuando se carga el componente
  useEffect(() => {
    const interval = setInterval(() => {
      // Incrementamos los segundos cada segundo
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Devolver una función de limpieza para detener el intervalo
    return () => clearInterval(interval);
  }, []); // El array vacío [] asegura que useEffect solo se ejecute una vez (cuando se monta el componente)

  // Renderizamos el componente SecondsCounter con los segundos actuales
  return (
    <div className="app">
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default App;

// Usamos ReactDOM.createRoot().render() para renderizar la aplicación en el punto de entrada 'root' del HTML
ReactDOM.createRoot(document.getElementById('app')).render(<App />);

// 📝 Instrucciones
// Crea un componente de contador de segundos, llamado SecondsCounter. Debería verse como este.

// El propósito principal del componente es mostrar cuántos segundos han pasado desde que el sitio web terminó de cargarse (onLoad).
// Usa ReactDOM.createRoot() para representar el componente en la aplicación web.
// Usa la función setInterval() para volver a renderizar el componente cada segundo.
// El componente no necesita un estado local, puede pasar la cantidad de segundos como props de la siguiente manera:
// <SecondsCounter seconds={3434} />