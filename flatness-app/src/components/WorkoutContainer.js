import React, {useState, useEffect} from 'react'
import WorkoutForm from "../components/WorkoutForm"
import WorkoutList from "../components/WorkoutList"

function WorkoutContainer(){
  const [workouts, setWorkouts] = useState([])

  function deleteHandler(id) {
    const deleteWorkout = workouts.filter(deleteWorkout => deleteWorkout.id !== id)
    setWorkouts(deleteWorkout)
  }
  
  
  useEffect(() =>{
  fetch("http://localhost:3000/workouts")
  .then((r) => r.json())
  .then ((data) => setWorkouts(data))
  }, [])
  
  function handleSubmit(newWorkout){
    const options = {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newWorkout)   
  }
  fetch('http://localhost:3000/workouts', options )
  .then((r) => r.json())
  .then(data =>setWorkouts(...workouts, newWorkout) )
  
  }
  return(
<div className="workoutContainer">
  <WorkoutForm  onSubmit={handleSubmit}/>
  <WorkoutList workouts={workouts} deleteWorkout={deleteHandler}/>
</div>
  )

}

export default WorkoutContainer;