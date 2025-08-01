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
      <h1>Color changing Widget Description</h1>
      <p>
        The ColorChanger widget allows users to input a color name or color code
        and dynamically changes the heading text color to the entered value. The
        color text is displayed in uppercase for clarity.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>
            To provide a simple interactive tool for experimenting with colors
            in text.
          </li>
          <li>
            To demonstrate React’s state management and controlled input
            handling.
          </li>
          <li>
            To visually show how CSS colors can be dynamically applied via React
            styles.
          </li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>
            Enter a Color: Type a valid CSS color name (e.g., red, blue, green)
            or a color code (e.g., #ff0000, rgb(0,128,0)) into the input box.
          </li>
          <li>
            Update Color: Click the Update button to apply the entered color to
            the heading text above.
          </li>
          <li>
            Visual Feedback: The heading text will change to the entered color
            and display the color text in uppercase.
          </li>
          <li>
            Reset Input: After updating, the input box clears automatically,
            ready for a new color.
          </li>
        </ul>
      </div>
    </div>
  );
}
