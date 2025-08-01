import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const updateColor = () => {
    setColor(inputValue.toUpperCase());
    setInputValue("");
  };
  return (
    <div style={{ textAlign: "center", paddingTop: "30px" }}>
      <h1 style={{ color: color }}>{color || "Color Changer"}</h1>
      <div>
        <input
          style={{
            width: "140px",
            height: "30px",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="Enter a color"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={updateColor}
          style={{
            width: "60px",
            height: "30px",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}
