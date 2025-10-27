// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    // Add a leading zero to the value if it's less than 10
    const value = timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval];

    timerComponents.push(
      <div key={interval} className="countdown-item">
        <span className="countdown-value">{value}</span>
        <span className="countdown-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-wrapper">
        <h3 className="countdown-title">AFESMX25 comienza en:</h3>
        <div className="countdown-container">
        {timerComponents.length ? timerComponents : <span>¡El evento ha comenzado!</span>}
        </div>
    </div>
  );
};

export default Countdown;
