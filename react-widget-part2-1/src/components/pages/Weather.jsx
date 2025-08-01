// import { useEffect, useState } from "react";

// export default function Weather() {
//   const [temp, setTemp] = useState(null);
//   useEffect(() => {
//     fetch("https://www.metaweather.com/api/location/search/?query=London")
//       .then((res) => res.json())
//       .then((data) => {
//         setTemp(data.main.temp);
//         console.log("Weather data:", data);
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);

//   return (
//     <div>
//       <h1>Weather in Utah</h1>
//       {temp !== null ? <h2>Temperature: {temp}°C</h2> : <p>Loading...</p>}
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Weather({ location = "New York" }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "YOUR_API_KEY"; // replace with your actual key
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${encodeURIComponent(
      location
    )}&apikey=${apiKey}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setWeather(data.data.values);
      })
      .catch((err) => console.error("API error:", err))
      .finally(() => setLoading(false));
  }, [location]);

  if (loading) return <p>Loading weather…</p>;
  if (!weather) return <p>Could not retrieve weather.</p>;

  return (
    <div>
      <h3>Current Weather in {location}</h3>
      <p>🌡 Temperature: {weather.temperature} °C</p>
      <p>💧 Humidity: {weather.humidity} %</p>
      <p>💨 Wind: {weather.windSpeed} m/s</p>
      <p>☁ Cloud Cover: {weather.cloudCover} %</p>
    </div>
  );
}
