import { useEffect, useState } from "react";

export default function TextAlign() {
  const [textAlign, setTextAlign] = useState("center");
  console.log(textAlign);
  return (
    <div className="align-wrapper">
      <div className="text-erapper">
        <h1 style={{ textAlign: `${textAlign}` }}>Text Align</h1>
      </div>
      <div>
        <button className="align-button" onClick={() => setTextAlign("left")}>
          Left
        </button>
        <button className="align-button" onClick={() => setTextAlign("center")}>
          Center
        </button>
        <button className="align-button" onClick={() => setTextAlign("right")}>
          Right
        </button>
      </div>

      <h1>TextAlign Widget Description</h1>
      <p>
        The TextAlign widget allows users to dynamically change the alignment of
        a heading’s text. It provides three buttons labeled Left, Center, and
        Right to control the CSS text-align property of the heading.
      </p>
      <h2>Purpose:</h2>
      <div>
        <ul>
          <li>
            To demonstrate how text alignment can be changed interactively using
            React state.
          </li>
          <li>
            To provide a simple UI for experimenting with CSS text alignment.
          </li>
          <li>
            To showcase real-time style updates based on user interaction.
          </li>
        </ul>
      </div>
      <h2>Instructions for Use:</h2>
      <div>
        <ul>
          <li>Initial Alignment: The heading text is centered by default.</li>
          <li>
            Change Alignment: Click the Left, Center, or Right button to align
            the heading text accordingly.
          </li>
          <li>
            Immediate Update: The heading text’s alignment updates instantly to
            reflect your selection.
          </li>
        </ul>
      </div>
    </div>
  );
}
