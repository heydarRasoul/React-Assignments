import widget from "../../assets/images/widget.webp";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome to Widget World</h1>
        <p>
          Explore a collection of interactive and fun web widgets built using
          React. From sliders to clocks, each component is designed to
          demonstrate real-world UI behavior with modern styling and
          responsiveness.
        </p>
      </div>
      <img className="home-image" src={widget} alt="Widgets overview" />
    </div>
  );
}
