import { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      greetingHi: "Hello",
      greetingColor: "blue",
    };
    this.toggleGreeting = this.toggleGreeting.bind(this);
  }

  toggleGreeting = () => {
    this.setState({
      greetingHi: this.state.greetingHi === "Hello" ? "Goodbye" : "Hello",
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontSize: "30px",
            color: "white",
            backgroundColor: this.state.greetingColor,
          }}
        >
          {this.state.greetingHi}
        </h3>
        <button onClick={this.toggleGreeting} style={{ width: "100px" }}>
          Toggle Me
        </button>
      </div>
    );
  }
}

export default Greeting;
