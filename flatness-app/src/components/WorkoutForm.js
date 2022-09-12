

function WorkoutForm(){




return (
<form>
<div className="form-entry">
    <div className="col-5">
        <input 
        className="form-control"
        type = "text"
        name ="distance"
        placeholder = "How far did you make it?"
/>
  </div>
    <div className="col-5">
        <input 
        className="form-control"
        type = "text"
        name ="time"
        placeholder = "How much time in minutes?"
/>
</div>
<select className ="form-control" name="exercise">
    <option value= "Walking">Walking</option>
    <option value= "Running">Running</option>
    <option value="Swimming">Swimming</option>
    <option value= "Biking">Biking</option>
    <option value= "Rollerblading">Rollerblading</option>

            </select>
    </div>
</form>
)
}




export default WorkoutForm;