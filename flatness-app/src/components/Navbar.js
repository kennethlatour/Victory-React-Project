import {Switch, Route, Link} from "react-router-dom"


function Navbar(){

    return(
        <div>
             <button>
            <Link to='/'>
            About Us
            </Link>
            </button>
        <button>List of Workouts</button>
        <button>Workout Form</button>
        </div>
    )

}

export default Navbar;