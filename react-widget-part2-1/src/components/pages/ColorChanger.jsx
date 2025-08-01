import { useEffect, useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const updateColor = () => {
    setColor(inputValue.toUpperCase());
    setInputValue("");
  };
  return (
    <div className="color-wraapper">
      <h1 style={{ color: color }}>{color || "Enter a Color"}</h1>

      <input
        className="input-box"
        type="text"
        placeholder="Enter a color"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="update-button" onClick={updateColor}>
        Update
      </button>
    </div>
  );
}
