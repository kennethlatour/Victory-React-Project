import Header from "../components/Header";
import WorkoutContainer from "../components/WorkoutContainer"
import WorkoutForm from "../components/WorkoutForm"
import '../App.css';



function App() {
  return (
    <div className="App">
     
      <Header />
      <WorkoutForm />
      <WorkoutContainer />
    </div>
  );
}

export default App;
