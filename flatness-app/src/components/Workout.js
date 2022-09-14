
function Workout({ workout, deleteWorkout, favoriteHandler}){

    function clickHandler(id) {
        fetch(`http://localhost:3000/workouts/${id}`, {
        method: "DELETE"
        })
        deleteWorkout(workout.id)
      }

      const date = new Date(workout.date);
      const sliced = String(date).slice(4,15);
      const calorieCounter = (() => {
        if (workout.workoutType === "Running") {
          return workout.distance * 100
        } else if (workout.workoutType === "Walking") {
          return workout.distance * 77
        } else if (workout.workoutType === "Swimming") {
          return workout.distance * 531
        } else if (workout.workoutType === "Biking") {
          return workout.distance * 55
        } else if (workout.workoutType === "Rollerblading") {
          return workout.distance * 65
        }
      })

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
       <p className="calories"> Calories Burned : {calorieCounter()}        calories</p>
       <button onClick={() => clickHandler(workout.id)} className="delete">Delete 🗑</button>
    </div>
)




}

export default Workout;