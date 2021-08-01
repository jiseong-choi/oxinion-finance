import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/MainPage/Home";
import Calculator from "./views/CalculatorPage/index";
import Screener from "./views/ScreenerPage/Screener";
import Calendar from "./views/CalendarPage/CalendarPage";
import StockList from "./components/StockList/StockList";
import Stock from "./components/Stock/StockCard";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/screener" component={Screener} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/stocks" component={StockList} />
        <Route path="/stocks/:ticker" children={<Stock />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
