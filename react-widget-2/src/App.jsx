import { useState } from "react";
import FontSizer from "./components/pages/FontSizer";
import TextAlign from "./components/pages/TextAlign";
import Clock from "./components/pages/Clock";
import ClockClass from "./components/pages/ClockClass.jsx";
import RgbSlider from "./components/pages/RgbSlider.jsx";
import ColorChanger from "./components/pages/ColorChanger";
import Weather from "./components/pages/Weather.jsx";

export default function App() {
  return (
    <div>
      <FontSizer />
      <TextAlign />
      <Clock />
      <ClockClass />
      <ColorChanger />
      <RgbSlider />
      <Weather />
    </div>
  );
}
