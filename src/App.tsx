import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/screener">
          <Signup />
        </Route>
        <Route path="/calculator">
          <Signup />
        </Route>
        <Route path="/calendar">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
