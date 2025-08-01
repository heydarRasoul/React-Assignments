import { NavLink } from "react-router-dom";

const navLinkStyle = {
  padding: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid black",
};

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/fontSizer">
        Font Sizer
      </NavLink>
      <NavLink className="nav-link" to="/textAlign">
        TextAlign
      </NavLink>
      <NavLink className="nav-link" to="/clock">
        Clock
      </NavLink>
      <NavLink className="nav-link" to="/rgbSlider">
        Rgb Slider
      </NavLink>
      <NavLink className="nav-link" to="/colorChanger">
        Color Changer
      </NavLink>
      <NavLink className="nav-link" to="/weather">
        Weather
      </NavLink>
    </div>
  );
}
