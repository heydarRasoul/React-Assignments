import { Component } from "react";

class Header extends Component {
  render() {
    const { id, title, link, aboutUs } = this.props.header;
    return (
      <div className="head-wrapper">
        <h4>{title}</h4>
        <a href={link} target="_blank">
          Training
        </a>
        <a href={aboutUs} target="_blank">
          About Us
        </a>
      </div>
    );
  }
}

export default Header;
