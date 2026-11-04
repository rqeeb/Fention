import HomeHeader from "../components/Header/HomeHeader";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="homeBox">
        <HomeHeader />
        <br />
        <div className="columnContainer">
          <div className="leftColumn">Simple, Private, Temporary Chat.</div>
          <div className="rightColumn">
            <div className="joinRoom">+</div>
            <div className="createRoom">Create</div>
          </div>
        </div>
      </div>
    </div>
  );
}
