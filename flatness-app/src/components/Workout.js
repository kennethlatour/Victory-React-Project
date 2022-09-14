
function Workout({ workout, deleteWorkout, favoriteHandler}){

    function clickHandler(id) {
        fetch(`http://localhost:3000/workouts/${id}`, {
        method: "DELETE"
        })
        deleteWorkout(workout.id)
      }




return(
    <div className ="individual-workouts">
       <h1> {workout.favorite ? 
  <button className="favoite-on" onClick={()=>{favoriteHandler(workout)}}>
    ★
  </button>
 : 
  <button className="favorite-off" onClick={()=>{favoriteHandler(workout)}}>
    ☆
  </button>} {workout.date} </h1>
       <p> {workout.workoutType}</p>
       <p>{workout.distance} miles</p>
       <p>{workout.timeSpent} minutes</p>
       <button onClick={() => clickHandler(workout.id)} className="delete">Delete 🗑</button>
    </div>
)




}

export default Workout;