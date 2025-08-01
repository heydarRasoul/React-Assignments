import { useEffect, useState } from "react";

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
    <div className="rgb-wrapper">
      <div
        className="color-box-wrapper"
        style={{
          backgroundColor: `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`,
        }}
      ></div>
      <div className="color-adjuster">
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
      <div className="color-adjuster">
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
      <div className="color-adjuster">
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
