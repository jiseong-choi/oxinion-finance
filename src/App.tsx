import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

interface IState {
  dividends: {
    ticker: string;
    dividend: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [dividends, setDividends] = useState<IState["dividends"]>([
    {
      ticker: "Microsoft",
      dividend: 0.02,
      url: "",
      note: "The best tech stock",
    },
  ]);

  return (
    <div className="App">
      <h1>Dividend Heros</h1>
      <List dividends={dividends} />
    </div>
  );
}

export default App;
