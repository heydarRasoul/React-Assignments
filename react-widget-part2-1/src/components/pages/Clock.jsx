import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  const toggleClock = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-wrapper">
      <h1>Local Time</h1>
      <div className="clock">
        {isVisible && <p>{currentTime.toLocaleTimeString()}</p>}
      </div>
      <button className="toggle-button" onClick={toggleClock}>
        {isVisible ? "Hide" : "Show Time"}
      </button>
    </div>
  );
}
