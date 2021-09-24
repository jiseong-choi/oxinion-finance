import React, { useState } from "react";
import { StockCell, StockContainer, StockControl } from "./styles";
import axios from "axios";
import { InsertInput } from "../../PortfolioForm/styles";

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
  const [update, setUpdate] = useState(false);

  const updateData = () => {
    const data = {
      ticker: tickerSymbol,
      share: shares,
      cost: avgCost,
      _id: id,
    };
    axios.post("https://api.finance.oxinion.com/update", data).then((res) => {
      window.location.reload();
    });
  };

  const deleteData = () => {
    axios
      .post("https://api.finance.oxinion.com/delete", { _id: id })
      .then((res) => window.location.reload());
  };

  return (
    <StockContainer>
      <StockCell>
        {update ? (
          <p onChange={() => setTickerSymbol(tickerSymbol)}>{tickerSymbol}</p>
        ) : (
          tickerSymbol
        )}
      </StockCell>
      <StockCell>
        {update ? (
          <InsertInput
            type="number"
            step="any"
            placeholder="Shares"
            name="share"
            min="0"
            required
            value={shares}
            onChange={(e) => setShares(Number(e.target.value))}
          />
        ) : (
          shares
        )}
      </StockCell>
      <p>
        {update ? (
          <InsertInput
            type="number"
            step="any"
            placeholder="Shares"
            name="share"
            min="0"
            required
            value={avgCost}
            onChange={(e) => setAvgCost(Number(e.target.value))}
          />
        ) : (
          avgCost
        )}
      </p>
      {update ? (
        <StockControl onClick={() => updateData()}>Update</StockControl>
      ) : (
        <StockControl onClick={() => setUpdate(true)}>Edit</StockControl>
      )}
      <StockControl onClick={() => deleteData()}>Delete</StockControl>
    </StockContainer>
  );
};

export default PortfolioItem;
