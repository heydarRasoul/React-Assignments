import { BrowserRouter } from "react-router-dom";

import "./styles/app.scss";

import Navbar from "./components/navigation/Navbar";
import Routing from "./components/navigation/Routing";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </div>
  );
}
