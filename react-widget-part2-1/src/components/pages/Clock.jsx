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
      <div className="clock">
        {isVisible && <h1>{currentTime.toLocaleTimeString()}</h1>}
      </div>
      <button className="toggle-button" onClick={toggleClock}>
        {isVisible ? "Hide" : "Show Time"}
      </button>
      <h1>Clock Widget Description</h1>
      <p>
        The Clock widget displays the current local time, updating every second.
        It includes a toggle button that allows users to show or hide the live
        clock display.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>To provide a simple, real-time display of the local time.</li>
          <li>
            To demonstrate dynamic state updates and conditional rendering in
            React.
          </li>
          <li>
            To allow users control over viewing the time with a show/hide
            toggle.
          </li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>
            Initial Display: When the component loads, the current time is
            tracked internally but not shown by default.
          </li>
          <li>
            Show Time: Click the "Show Time" button to display the current local
            time, which updates every second.
          </li>
          <li>
            Hide Time: Click the "Hide" button to hide the clock display while
            continuing to keep track of the time internally.
          </li>
          <li>
            Automatic Updates: When visible, the time updates every second to
            show the live time.
          </li>
        </ul>
      </div>
    </div>
  );
}
