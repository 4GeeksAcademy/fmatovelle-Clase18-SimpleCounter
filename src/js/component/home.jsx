import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  
  return (
    <div className="app">
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

