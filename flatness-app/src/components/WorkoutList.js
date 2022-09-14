import Workout from "./Workout";

function WorkoutList({workouts, deleteWorkout, favoriteHandler}){

    const workoutList = workouts.map((workout) =>{
        return  <Workout  key ={workout.id} workout={workout} deleteWorkout = {deleteWorkout} favoriteHandler={favoriteHandler}/>
      })
      
      return (
      <div className="workout-container">
      
      {workoutList}
      
      </div>
      )
}

export default WorkoutList;