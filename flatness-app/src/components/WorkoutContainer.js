import Workout from "../components/Workout"

function WorkoutContainer({workouts}){

const workoutList = workouts.map((workout) =>{
  return  <Workout  key ={workout.id} workout={workout}/>
})

return (
<div className="workout-container">

{workoutList}

</div>


)

}

export default WorkoutContainer;