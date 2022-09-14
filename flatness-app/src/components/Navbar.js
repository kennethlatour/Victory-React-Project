import {Switch, Route, Link} from "react-router-dom"


function Navbar(){

    return(
        <div>
             <button>
            <Link to='/'>
            About Us
            </Link>
            </button>
            <Link to='/workouts'>
        <button>List of Workouts</button>
        </Link>
        <Link to="/addworkout">
        <button>Workout Form</button>
        </Link>
        </div>
    )

}

export default Navbar;