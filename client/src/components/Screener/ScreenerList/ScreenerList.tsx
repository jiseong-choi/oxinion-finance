import React, { useState, useEffect } from "react";
import axios from "axios";
import { StockListContainer } from "./styles";
import { CircularProgress } from "@material-ui/core";
import StockCard from "../../Calculator/Stock/StockCard";

const ScreenerList = () => {
  const [stocks, setStocks] = useState([]);

  // Using useEffect to call the API once mounted
  useEffect(() => {
    axios.get(`https://dividenddb.herokuapp.com/stocks`).then((res) => {
      const responseStocks = res.data;
      setStocks(responseStocks);
    });
  }, []);

  return (
    <StockListContainer>
      {stocks ? (
        <div>
          {stocks.map((stock: any) => (
            <StockCard stock={stock} key={stock.ticker} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </StockListContainer>
  );
};

export default ScreenerList;
