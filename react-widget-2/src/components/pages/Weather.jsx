import { useEffect, useState } from "react";

export default function Weather() {
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    fetch("https://www.metaweather.com/api/location/search/?query=London")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.main.temp);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>Weather in Utah</h1>
      {temp !== null ? <h2>Temperature: {temp}°C</h2> : <p>Loading...</p>}
    </div>
  );
}
