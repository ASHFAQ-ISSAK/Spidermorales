import { useEffect } from "react";
import { useState } from "react";
function Countdown() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('April 1, 2024 00:00:00').getTime();
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setCountdown('Countdown finished!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="counting">
      <p>{countdown}</p>
    </div>
  );
}

export default Countdown;
