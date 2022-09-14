
function Workout({ workout, deleteWorkout, favoriteHandler}){

    function clickHandler(id) {
        fetch(`http://localhost:3000/workouts/${id}`, {
        method: "DELETE"
        })
        deleteWorkout(workout.id)
      }

      const date = new Date(workout.date);
      const sliced = String(date).slice(4,15);


return(
    <div className ="individual-workouts">
       <h1> {workout.favorite ? 
  <button className="favorite-on" onClick={()=>{favoriteHandler(workout)}}>
    ★
  </button>
 : 
  <button className="favorite-off" onClick={()=>{favoriteHandler(workout)}}>
    ☆
  </button>} {sliced} </h1>
       <p className="exerciseType"> Exercise Type : {workout.workoutType}</p>
       <p className="exerciseDistance">Distance : {workout.distance} miles</p>
       <p className="exerciseTime">Time : {workout.timeSpent} minutes</p>
       <p className="calories"> Calories Burned : {/* */}        calories</p>
       <button onClick={() => clickHandler(workout.id)} className="delete">Delete 🗑</button>
    </div>
)




}

export default Workout;