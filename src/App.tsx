import React, { useState } from "react";
import List from "./components/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Navbar from "./components/Navbar/Navbar";

interface IState {
  dividends: {
    ticker: string;
    amount: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [dividends, setDividends] = useState<IState["dividends"]>([
    {
      ticker: "Microsoft",
      amount: 0.02,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png",
      note: "The best tech stock",
    },
  ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Navbar />
            <h1>Dividend Kings</h1>
            <List dividends={dividends} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
