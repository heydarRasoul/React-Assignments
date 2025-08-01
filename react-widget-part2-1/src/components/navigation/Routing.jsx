import { Switch, Redirect, Route } from "react-router-dom";

import FontSizer from "../pages/FontSizer";
import TextAlign from "../pages/TextAlign";
import Clock from "../pages/Clock";
import RgbSlider from "../pages/RgbSlider";
import ColorChanger from "../pages/ColorChanger";
import Weather from "../pages/Weather";
import Home from "../pages/Home";

export default function Routing() {
  return (
    <Switch>
      <Route path="/fontSizer" component={FontSizer} />
      <Route path="/textAlign" component={TextAlign} />
      <Route path="/clock" component={Clock} />
      <Route path="/rgbSlider" component={RgbSlider} />
      <Route path="/colorChanger" component={ColorChanger} />
      <Route path="/home" component={Home} />
      {/* <Route path="/weather" component={Weather} /> */}
      <Redirect exact from="/" to="/home" />
    </Switch>
  );
}
