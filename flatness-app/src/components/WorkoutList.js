import Workout from "./Workout";
import '../App.css';

function WorkoutList({workouts, deleteWorkout, favoriteHandler}){

    const workoutList = workouts.map((workout) =>{
        return <li id = "list"> <Workout  key ={workout.id} workout={workout} deleteWorkout = {deleteWorkout} favoriteHandler={favoriteHandler}/> </li>
      })
      
      return (
      <div className="workoutlist">
      <ul class = "listofworkouts">
      {workoutList}
      </ul>
      </div>
      )
}

export default WorkoutList;