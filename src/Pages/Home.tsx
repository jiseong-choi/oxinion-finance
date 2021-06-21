import React, { useState } from "react";
import List from "../components/List";
import Navbar from "../components/Navbar/Navbar";

interface IState {
  dividends: {
    ticker: string;
    amount: number;
    url: string;
    note?: string;
  }[];
}

const Home = () => {
  const [dividends, setDividends] = useState<IState["dividends"]>([
    {
      ticker: "Microsoft",
      amount: 0.02,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png",
      note: "The best tech stock",
    },
  ]);
  return (
    <div>
      <Navbar />
      <List dividends={dividends} />
    </div>
  );
};

export default Home;
