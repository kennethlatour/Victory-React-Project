import Workout from "../components/Workout"

function WorkoutContainer({workouts, deleteWorkout}){

const workoutList = workouts.map((workout) =>{
  return  <Workout  key ={workout.id} workout={workout} deleteWorkout = {deleteWorkout}/>
})

return (
<div className="workout-container">

{workoutList}

</div>


)

}

export default WorkoutContainer;