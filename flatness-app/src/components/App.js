import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import WorkoutContainer from "../components/WorkoutContainer"
import Home from "../components/Home"
import About from "../components/About"

import '../App.css';



function App() {


  return (
    <div className="App">
      <Header />
      <WorkoutContainer />
    </div>
  );
}

export default App;
