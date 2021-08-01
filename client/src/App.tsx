import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/MainPage/Home";
import Calculator from "./views/CalculatorPage/index";
import Screener from "./views/ScreenerPage/Screener";
import Calendar from "./views/CalendarPage/CalendarPage";
import StockList from "./components/StockList/StockList";
import Stock from "./components/Stock/Stock";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/screener" component={Screener} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/stocks" children={<StockList />} />
          <Route path="/stocks/:ticker" children={<Stock />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
