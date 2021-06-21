import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Calculator from "./Pages/Calculator";
import News from "./Pages/News";
import Calendar from "./Pages/Calendar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/news">
          <News />
        </Route>

        <Route path="/calculator">
          <Calculator />
        </Route>

        {/* <Route path="/screener">
          <Screener />
        </Route> */}

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
