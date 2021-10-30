import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/MainPage/Home";
import Portfolio from "./pages/PortfolioPage/index";
import Screener from "./pages/ScreenerPage/Screener";
import Calendar from "./pages/CalendarPage/CalendarPage";
import Docs from "./pages/DocPage/index";
// import StockList from "./components/StockList/StockList";
import StockProfile from "./components/common/StockProfile/StockProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/screener" component={Screener} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/docs" component={Docs} />
          {/* <Route exact path="/stocks" children={<StockList />} /> */}
          <Route path="/stocks/:ticker" children={<StockProfile />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
