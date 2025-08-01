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
    <div className="font-sizer-wraapper">
      <h1 style={{ fontSize: `${fontSize}px` }}>
        Click to resize font size:({fontSize})
      </h1>
      <div>
        <button className="size-changer" onClick={Grow}>
          Grow
        </button>

        <button className="size-changer" onClick={Shrink}>
          Shrink
        </button>
      </div>
    </div>
  );
}
