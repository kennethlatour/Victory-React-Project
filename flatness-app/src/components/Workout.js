
function Workout({ workout }){






return(
    <div className ="individual-workouts">
       <h1> {workout.date} </h1>
       <p> {workout.workoutType}</p>
       <p>{workout.distance} miles</p>
       <p>{workout.timeSpent} minutes</p>
    </div>
)




}

export default Workout;