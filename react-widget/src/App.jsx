import { Component } from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import HideShow from "./components/HideShow";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <Counter />
          <Greeting />
          <HideShow />
        </div>
      </div>
    );
  }
}

export default App;
