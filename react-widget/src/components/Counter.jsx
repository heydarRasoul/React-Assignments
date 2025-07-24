import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) =>
      prevState.count > 1 ? { count: prevState.count - 1 } : null
    );
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={this.handleIncrement}>+</button>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
