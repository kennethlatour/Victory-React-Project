import React, {useState, useEffect} from 'react'
import Header from "../components/Header";
import WorkoutContainer from "../components/WorkoutContainer"
import WorkoutForm from "../components/WorkoutForm"
import '../App.css';



function App() {
const [workouts, setWorkouts] = useState([])



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
.then(data => console.log(data))

setWorkouts(...workouts, newWorkout)
}

  return (
    <div className="App">
     
      <Header />
      <WorkoutForm  onSubmit={handleSubmit}/>
      <WorkoutContainer workouts ={workouts}/>
    </div>
  );
}

export default App;
