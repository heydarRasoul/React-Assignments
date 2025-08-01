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

      <h1>FontSizer Widget Description</h1>
      <p>
        The FontSizer widget allows users to dynamically increase or decrease
        the font size of a text heading by clicking buttons. The font size
        updates in increments of 5 pixels within a defined range.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>
            To provide an interactive way for users to adjust font size
            visually.
          </li>
          <li>
            To demonstrate React state updates and conditional logic for limits.
          </li>
          <li>
            To showcase real-time style updates and side effects with useEffect.
          </li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>
            Initial Font Size: The heading starts at 20 pixels in font size.
          </li>
          <li>
            Grow Font: Click the Grow button to increase the font size by 5
            pixels, up to a maximum of 96 pixels.
          </li>
          <li>
            Shrink Font: Click the Shrink button to decrease the font size by 5
            pixels, down to a minimum of 4 pixels.
          </li>
          <li>
            Live Feedback: The current font size is displayed in parentheses and
            logged to the console whenever it changes.
          </li>
        </ul>
      </div>
    </div>
  );
}
