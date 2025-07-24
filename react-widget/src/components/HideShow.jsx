import { Component } from "react";

class HideShow extends Component {
  constructor() {
    super();
    this.state = {
      show: "Hide Me",
      button: "Hide",
    };
    this.handleHide = this.handleHide.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleHide = () => {
    this.setState({
      show: this.state.show === "Hide Me" ? "" : "Hide Me",
    });
  };

  handleButton = () => {
    this.setState({
      button: this.state.button === "Hide" ? "Show" : "Hide",
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
        <h3>{this.state.show}</h3>
        <button
          onClick={() => {
            this.handleHide();
            this.handleButton();
          }}
        >
          {this.state.button}
        </button>
      </div>
    );
  }
}

export default HideShow;
