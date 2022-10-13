function Workout({ workout, deleteWorkout, favoriteHandler }) {
  function clickHandler(id) {
    fetch(`http://localhost:3000/workouts/${id}`, {
      method: "DELETE",
    });
    deleteWorkout(workout.id);
  }

  const date = new Date(workout.date);
  const sliced = String(date).slice(4, 15);

  const calorieCounter = () => {
    if (workout.workoutType === "Run") {
      return workout.distance * 100;
    } else if (workout.workoutType === "Walk") {
      return workout.distance * 77;
    } else if (workout.workoutType === "Swim") {
      return workout.distance * 531;
    } else if (workout.workoutType === "Bike") {
      return workout.distance * 55;
    } else if (workout.workoutType === "Rollerblade") {
      return workout.distance * 65;
    }
  };

  return (
    <div className="individual-workouts">
        <h1 className="exerciseType">  {workout.workoutType}</h1>
      <h1 id = "date">
       {workout.date}
      </h1>
   
      <p className="exerciseDistance">Distance : {workout.distance} miles</p>
      <p className="exerciseTime">Time : {workout.timeSpent} minutes</p>
      <p className="calories"> Calories Burned : {calorieCounter()} calories</p>
      <p className="buttons">
      {workout.favorite ? (
          <button
            className="favorite-on" onClick={() => {favoriteHandler(workout)}}>
            ★
          </button>
        ) : (
          <button className="favorite-off" onClick={() => {favoriteHandler(workout);}}>
            ☆
          </button>)}
          
          <button onClick={() => clickHandler(workout.id)} className="delete">
        Delete 
      </button>
     
      </p>
    </div>
  );
}

export default Workout;
