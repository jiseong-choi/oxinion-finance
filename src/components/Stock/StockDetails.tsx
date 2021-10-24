import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header/Header";
import BarChart from "../common/Chart/BarChart";

const StockDetails = () => {
  const { symbol }: any = useParams();
  const [stockDetails, setStockDetails] = useState();

  // Using useEffect to call the API once mounted
  useEffect(() => {
    axios
      .get(`https://oxinionapi.herokuapp.com/stocks?symbol=${symbol}`)
      .then((res) => {
        const responseStockDetails = res.data[0];
        setStockDetails(responseStockDetails);
      });
  }, [symbol]);

  console.log(stockDetails);

  const { name, symbol: stockTicker, sector }: any = stockDetails || {};

  return (
    <div>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <h1>{name}</h1>
        testtest
        <small>{`Stock Symbol: ${stockTicker}`}</small>
        <h3> {sector} </h3>
        <BarChart />
        why not work?
      </div>
    </div>
  );
};

export default StockDetails;
