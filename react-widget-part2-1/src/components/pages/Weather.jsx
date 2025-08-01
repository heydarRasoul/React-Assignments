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
    <div className="weather-wraapper">
      <div>
        <h1>Weather in Utah</h1>
        {temp !== null ? <h2>Temperature: {temp}°F</h2> : <p>Loading...</p>}
      </div>

      <h1>Weather Widget Description</h1>
      <p>
        The Weather widget is a simple interface that fetches and displays the
        current temperature for a specific location using the National Weather
        Service API. It shows real-time weather data based on preset geographic
        coordinates.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>Provide real-time temperature updates for a specific location</li>
          <li>Deliver weather information quickly and clearly</li>
          <li>Offer a simple, user-friendly display without extra clutter</li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>
            Fetches current temperature data from the National Weather Service
            API
          </li>
          <li>Displays temperature in Fahrenheit</li>
          <li>Shows a loading message while fetching data</li>
        </ul>
      </div>
    </div>
  );
}
