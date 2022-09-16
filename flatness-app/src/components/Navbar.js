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
      <button className="workoutButton">
      <Link to="/workouts">
      List of Workouts
      </Link></button>
    </div>
  );
}

export default Navbar;
