import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header/Header";

const Stock = () => {
  const { ticker }: any = useParams();
  const [stockDetails, setStockDetails] = useState();

  // Using useEffect to call the API once mounted
  useEffect(() => {
    axios
      .get(`https://dividenddb.herokuapp.com/stocks/${ticker}`)
      .then((res) => {
        const responseStockDetails = res.data;
        setStockDetails(responseStockDetails);
      });
  }, [ticker]);

  console.log(stockDetails);

  const { name, ticker: stockTicker, sector }: any = stockDetails || {};

  return (
    <div>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <h1>{name}</h1>
        <small>{`Stock Symbol: ${stockTicker}`}</small>
        <h3> {sector} </h3>
      </div>
    </div>
  );
};

export default Stock;
