import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/MainPage/Home";
import Calculator from "./views/Calculator";
import Screener from "./views/Screener";
import Calendar from "./views/CalendarPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/screener" component={Screener} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/calendar" component={Calendar} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
