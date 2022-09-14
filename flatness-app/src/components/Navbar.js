import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/About">About Us</Link>
      </button>
      <Link to="/workouts">
        <button>List of Workouts</button>
      </Link>
    </div>
  );
}

export default Navbar;
