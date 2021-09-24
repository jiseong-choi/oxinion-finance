import React, { useState } from "react";
import { StockContainer } from "./styles";
import axios from "axios";

const PortfolioItem = ({
  ticker,
  share,
  cost,
  id,
}: {
  ticker: string;
  share: number;
  cost: number;
  id: string;
}) => {
  const [tickerSymbol, setTickerSymbol] = useState(ticker);
  const [shares, setShares] = useState(share);
  const [avgCost, setAvgCost] = useState(cost);

  const deleteData = () => {
    axios
      .post("http://localhost:5000/delete", { _id: id })
      .then((res) => window.location.reload());
  };

  return (
    <StockContainer>
      <p>{tickerSymbol}</p>
      <p>{shares}</p>
      <p>{avgCost}</p>
      <button>Update</button>
      <button onClick={() => deleteData()}>Delete</button>
    </StockContainer>
  );
};

export default PortfolioItem;
