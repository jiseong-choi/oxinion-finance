import React, { useState } from "react";
import { StockContainer } from "./styles";
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
    axios.post("http://localhost:5000/update", data).then((res) => {
      window.location.reload();
    });
  };

  const deleteData = () => {
    axios
      .post("http://localhost:5000/delete", { _id: id })
      .then((res) => window.location.reload());
  };

  return (
    <StockContainer>
      <div>
        {update ? (
          <p onChange={() => setTickerSymbol(tickerSymbol)}>{tickerSymbol}</p>
        ) : (
          tickerSymbol
        )}
      </div>
      <p>
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
      </p>
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
        <button onClick={() => updateData()}>Update</button>
      ) : (
        <button onClick={() => setUpdate(true)}>Edit</button>
      )}
      <button onClick={() => deleteData()}>Delete</button>
    </StockContainer>
  );
};

export default PortfolioItem;
