import Workout from "./Workout";
import '../App.css';

function WorkoutList({workouts, deleteWorkout, favoriteHandler}){

    const workoutList = workouts.map((workout) =>{
        return  <Workout  key ={workout.id} workout={workout} deleteWorkout = {deleteWorkout} favoriteHandler={favoriteHandler}/>
      })
      
      return (
      <div className="workoutlist">
      
      {workoutList}
      
      </div>
      )
}

export default WorkoutList;