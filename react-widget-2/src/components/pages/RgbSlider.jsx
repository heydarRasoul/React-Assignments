import { useState } from "react";

export default function RgbSlider() {
  const [valueRed, setValueRed] = useState(0);
  const [valueGreen, setValueGreen] = useState(0);
  const [valueBlue, setValueBlue] = useState(0);

  const handleRed = (event) => {
    setValueRed(Number(event.target.value));
  };
  const handleGreen = (event) => {
    setValueGreen(Number(event.target.value));
  };
  const handleBlue = (event) => {
    setValueBlue(Number(event.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "5px",
        margin: "70px",
      }}
    >
      <div
        style={{
          backgroundColor: `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`,
          border: "1px solid black",
          width: "200px",
          height: "40px",
          borderRadius: "10px",
        }}
      ></div>
      <div>
        <label style={{ color: "red" }}>R:{valueRed}</label>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={valueRed}
          onChange={handleRed}
        ></input>
      </div>
      <div>
        <label style={{ color: "green" }}>G:{valueGreen}</label>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={valueGreen}
          onChange={handleGreen}
        ></input>
      </div>
      <div>
        <label style={{ color: "blue" }}>B:{valueBlue}</label>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={valueBlue}
          onChange={handleBlue}
        ></input>
      </div>
    </div>
  );
}
