import { Component } from "react";

class Users extends Component {
  render() {
    const { id, img, firstName, lastName, description, job } = this.props.user;

    return (
      <div className="portfolio-wrapper">
        <div className="img-name-wrapper">
          <img src={img} alt={`${firstName} ${lastName}`} />
          <div className="name-wrapper">
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
          </div>
        </div>
        <div className="description">
          <p>Description: {description}</p>
          <p>Job: {job}</p>
        </div>
      </div>
    );
  }
}

export default Users;
