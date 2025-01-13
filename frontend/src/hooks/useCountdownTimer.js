import { useState, useEffect } from "react";

const useCountdownTimer = ({ hours = 0, minutes = 0 }) => {
  // Calcula la fecha objetivo en función de las horas y minutos proporcionados
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + hours);
  targetDate.setMinutes(targetDate.getMinutes() + minutes);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 }; // Finalizó
    }

    const remainingHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const remainingMinutes = Math.floor((difference / (1000 * 60)) % 60);
    const remainingSeconds = Math.floor((difference / 1000) % 60);

    return {
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return timeLeft;
};

export default useCountdownTimer;
