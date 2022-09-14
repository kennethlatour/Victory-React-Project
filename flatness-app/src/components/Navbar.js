import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <button className="homeButton">
        <Link to="/">Home</Link>
      </button>
      <button className="aboutButton">
        <Link to="/About">About Us</Link>
      </button>
      <Link to="/workouts">
        <button className="workoutButton">List of Workouts</button>
      </Link>
    </div>
  );
}

export default Navbar;
