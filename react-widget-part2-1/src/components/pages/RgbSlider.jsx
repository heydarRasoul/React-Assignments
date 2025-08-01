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

      <h1>RgbSlider Widget Description</h1>
      <p>
        The RgbSlider widget provides an interactive interface with three
        sliders, each controlling the intensity of the Red, Green, and Blue
        channels of a color. As the sliders are adjusted, a display box updates
        its background color in real time, reflecting the combined RGB value.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>
            To allow users to explore and create colors by mixing red, green,
            and blue values.
          </li>
          <li>
            To demonstrate real-time state updates and dynamic inline styling in
            React.
          </li>
          <li>
            To visually teach how RGB color values combine to form different
            colors.
          </li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>
            Adjust Sliders: Use the three sliders labeled R, G, and B to adjust
            the intensity of the Red, Green, and Blue color components
            respectively. Each slider ranges from 0 to 255.
          </li>
          <li>
            Observe Color Change: The color box above the sliders updates
            instantly to display the color corresponding to the current RGB
            values.
          </li>
          <li>
            Read RGB Values: The numeric value next to each slider shows the
            current intensity of that color channel.
          </li>
        </ul>
      </div>
    </div>
  );
}
