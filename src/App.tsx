import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Calculator from "./Pages/Calculator";
import Calendar from "./Pages/Calendar";
import Screener from "./Pages/Screener";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/screener">
          <Screener />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
