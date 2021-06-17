import React, { useState } from "react";
import List from "./components/List";

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
      <h1>Dividend Kings</h1>
      <List dividends={dividends} />
    </div>
  );
}

export default App;
