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
    .then ((data) => {
      const orderedDates = data.slice(0).sort((a,b)=>
      b.date.localeCompare(a.date))
      setWorkouts(orderedDates)
    })
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
  function favoriteHandler(workout) {
    fetch(`http://localhost:3000/workouts/${workout.id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ favorite: !workout.favorite }),
    })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const updatedWorkout = workouts.map((workout) => {
        if (workout.id === data.id) {
          return data;
        } else {
          return workout;
        }
      });
      setWorkouts(updatedWorkout)
    });
  }
  
  return(
    <div className="workoutContainer">
  <WorkoutForm  onSubmit={handleSubmit}/>
  <WorkoutList workouts={workouts} deleteWorkout={deleteHandler} favoriteHandler={favoriteHandler}/>
</div>
  )
  
}

export default WorkoutContainer;