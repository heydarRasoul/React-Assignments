import { useEffect, useState } from "react";

export default function FontSizer() {
  const [fontSize, setFontSize] = useState(20);

  const Grow = () => {
    setFontSize((prev) => (prev < 96 ? prev + 5 : prev));
  };

  const Shrink = () => {
    setFontSize((prev) => (prev > 4 ? prev - 5 : prev));
  };

  useEffect(() => {
    console.log(`Font size is now ${fontSize}px`);
  }, [fontSize]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: `${fontSize}px` }}>Font Sizer</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={Grow}
          style={{ width: "70px", height: "70px", borderRadius: "60px" }}
        >
          Grow
        </button>

        <button
          onClick={Shrink}
          style={{ width: "70px", height: "70px", borderRadius: "60px" }}
        >
          Shrink
        </button>
      </div>
    </div>
  );
}
