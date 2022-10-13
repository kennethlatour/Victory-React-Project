import React, {useState} from "react"
import '../App.css';

function WorkoutForm({ onSubmit}){
    const [distance, setDistance] =useState('')
    const [time, setTime] = useState('')
    const [exercise, setExercise] = useState("Walk")
    const [date, setDate] = useState('')

function handleDateChange(e){
    e.preventDefault()
    setDate(e.target.value)
}

function handleDistanceChange(e){
    e.preventDefault()
    setDistance(e.target.value)
}

function handleTimeChange(e){
    e.preventDefault()
    setTime(e.target.value)
}

function handleExerciseChange(e){
    e.preventDefault(e)
    setExercise(e.target.value)
}


return (
<form onSubmit={()=>{
    const newWorkout ={
        id : "",
        date : date,
        distance : distance,
        timeSpent: time,
        workoutType: exercise
    }
    onSubmit(newWorkout)
    }
}>

<div className="form-entry">
    <div className="col-5">
        <label></label><br/>
        <input 
        className="form-control"
        type = "text"
        name ="date"
        placeholder = "MM.DD.YYYY"
        value={date}
        onChange={handleDateChange}/>
        </div>
    <div className="col-5">
        <label></label><br/>
        <input 
        className="form-control"
        type = "text"
        name ="distance"
        placeholder = "Miles Travelled"
        value={distance}
        onChange={handleDistanceChange}/>
  </div>
    <div className="col-5">
        <label></label><br/>
        <input 
        className="form-control"
        type = "text"
        name ="time"
        placeholder = "Minutes it taken"
        value={time}
        onChange={handleTimeChange}
/>
</div>
<select className ="form-dropdown" name="exercise" value={exercise} onChange={handleExerciseChange}>
    
    <option value= "Walk">Walk</option>
    <option value= "Run">Run</option>
    <option value="Swim">Swim</option>
    <option value= "Bike">Bike</option>
    <option value= "Rollerblade">Rollerblade</option>
            </select>
            <button className="submitButton" >Add</button>
    </div>
</form>

)
}




export default WorkoutForm;