import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage";
import { Background } from "./Pages/background";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div><Background /></div>
      <Router>
          <Switch>
          <Route path="/"><Homepage /></Route>
          <Route path="/Projects"></Route>
          <Route path="/Skills"></Route>
          </Switch>
</Router>
</div>
  );
}

export default App;
