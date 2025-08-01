import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <h2>{this.state.currentTime.toLocaleTimeString()}</h2>;
  }
}

export default class ClockWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: false,
    };
  }

  toggleClock = () => {
    this.setState((prevState) => ({
      showClock: !prevState.showClock,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {this.state.showClock && <Clock />}
        <button
          onClick={this.toggleClock}
          style={{
            backgroundColor: "yellow",
            width: "200px",
            height: "40px",
            borderRadius: "10px",
          }}
        >
          {this.state.showClock ? "Unmount" : "Mount"}
        </button>
      </div>
    );
  }
}
