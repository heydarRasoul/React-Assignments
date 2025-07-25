import { Component } from "react";
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/app.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: [
        {
          id: 1,
          title: "Staff Profile Cards",
          link: "https://www.w3schools.com/REACT/DEFAULT.ASP",
          aboutUs: "https://en.wikipedia.org/wiki/React_(software)",
        },
      ],
      usersArray: [
        {
          id: 1,
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          firstName: "James",
          lastName: "Anderson",
          description:
            "A passionate developer who loves working with React and TypeScript.",
          job: "Frontend Developer",
        },
        {
          id: 2,
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          firstName: "Sarah",
          lastName: "Mitchell",
          description:
            "Experienced project manager with a focus on agile delivery and team growth.",
          job: "Project Manager",
        },
        {
          id: 3,
          img: "https://randomuser.me/api/portraits/men/76.jpg",
          firstName: "Carlos",
          lastName: "Ramirez",
          description:
            "Backend engineer who enjoys solving complex problems and working with cloud infrastructure.",
          job: "Backend Engineer",
        },
        {
          id: 4,
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          firstName: "Linda",
          lastName: "Chen",
          description:
            "Creative UI/UX designer with a knack for crafting intuitive user experiences.",
          job: "UX Designer",
        },
        {
          id: 5,
          img: "https://randomuser.me/api/portraits/men/85.jpg",
          firstName: "Ethan",
          lastName: "Williams",
          description:
            "DevOps specialist ensuring smooth deployments and scalable infrastructure.",
          job: "DevOps Engineer",
        },
      ],
      footer: [
        {
          name: "Heydar Rasoulpour",
          copyRight: "&copy; 2025 - All rights reserved",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header header={this.state.header[0]} />
        </div>
        <div>
          {this.state.usersArray.map((user) => (
            <Users key={user.id} user={user} />
          ))}
        </div>
        <div>
          <Footer footer={this.state.footer[0]} />
        </div>
      </div>
    );
  }
}

export default App;
