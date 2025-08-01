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
    <div
      style={{
        textAlign: "center",
        fontSize: "40px",
        color: "purple",
        margin: "30px",
      }}
    >
      {isVisible && <p>{currentTime.toLocaleTimeString()}</p>}
      <button
        style={{
          backgroundColor: "purple",
          color: "white",
          width: "200px",
          height: "40px",
          borderRadius: "10px",
        }}
        onClick={toggleClock}
      >
        {isVisible ? "Hide" : "Show Time"}
      </button>
    </div>
  );
}
