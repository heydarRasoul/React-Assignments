import { useState } from "react";

export default function TextAlign() {
  const [textAlign, setTextAlign] = useState("Center");
  const boxSize = {
    width: "70px",
    borderRadius: "10px",
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <div>
      <h2 style={{ textAlign: `${textAlign}`, margin: "30px", color: "blue" }}>
        Text Align
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button style={boxSize} onClick={() => setTextAlign("left")}>
          Left
        </button>
        <button style={boxSize} onClick={() => setTextAlign("center")}>
          Center
        </button>
        <button style={boxSize} onClick={() => setTextAlign("right")}>
          Right
        </button>
      </div>
    </div>
  );
}
