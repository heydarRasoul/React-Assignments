import { Component } from "react";

class Footer extends Component {
  render() {
    const { name, copyRight } = this.props.footer;
    return (
      <div className="footer-wrapper">
        <p>{copyRight}</p>
        <h4>{name}</h4>
      </div>
    );
  }
}

export default Footer;
