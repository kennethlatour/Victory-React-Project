import Workout from "./Workout";

function WorkoutList({workouts, deleteWorkout}){

    const workoutList = workouts.map((workout) =>{
        return  <Workout  key ={workout.id} workout={workout} deleteWorkout = {deleteWorkout}/>
      })
      
      return (
      <div className="workout-container">
      
      {workoutList}
      
      </div>
      )
}

export default WorkoutList;