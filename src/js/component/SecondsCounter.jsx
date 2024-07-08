import React from 'react';

const SecondsCounter = ({ seconds }) => {
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


