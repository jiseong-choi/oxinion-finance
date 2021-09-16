import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/MainPage/Home";
import Calculator from "./pages/CalculatorPage/index";
import Screener from "./pages/ScreenerPage/Screener";
import Calendar from "./pages/CalendarPage/CalendarPage";
// import StockList from "./components/StockList/StockList";
import Stock from "./components/Stock/Stock";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/screener" component={Screener} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/calendar" component={Calendar} />
          {/* <Route exact path="/stocks" children={<StockList />} /> */}
          <Route path="/stocks/:ticker" children={<Stock />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
