import React, { useState } from "react";
import { InsertInput } from "../../PortfolioForm/styles";
import { StockContainer } from "./styles";

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
  return (
    <StockContainer>
      <p>{tickerSymbol}</p>
      <p>{shares}</p>
      <p> {avgCost}</p>
    </StockContainer>
  );
};

export default PortfolioItem;
