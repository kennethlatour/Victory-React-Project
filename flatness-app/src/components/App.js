import { Switch, Route, useHistory } from "react-router-dom";
import Header from "../components/Header";
import WorkoutContainer from "../components/WorkoutContainer"
import Home from "./Home";
import About from "./About";


import '../App.css';



function App() {
const history = useHistory()

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path ='/about'>
          <About />
        </Route>
        <Route exact path= '/workouts'>
      <WorkoutContainer />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
