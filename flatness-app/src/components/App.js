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

console.log(workouts)



  return (
    <div className="App">
     
      <Header />
      <WorkoutForm />
      <WorkoutContainer workouts ={workouts}/>
    </div>
  );
}

export default App;
