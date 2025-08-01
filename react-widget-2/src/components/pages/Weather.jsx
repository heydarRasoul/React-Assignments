import { useEffect, useState } from "react";

export default function Weather() {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    fetch("https://api.weather.gov/points/40.31,-111.71")
      .then((res) => res.json())
      .then((data) => {
        const forecastUrl = data.properties.forecast;
        return fetch(forecastUrl);
      })
      .then((res) => res.json())
      .then((forecastData) => {
        const temperature = forecastData.properties.periods[0].temperature;
        setTemp(temperature);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1>Weather in Utah</h1>
      {temp !== null ? <h2>Temperature: {temp}°F</h2> : <p>Loading...</p>}
    </div>
  );
}
