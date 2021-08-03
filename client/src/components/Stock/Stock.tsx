import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header/Header";
import BarChart from "../Chart/BarChart";

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

  // console.log(stockDetails);

  const {
    name,
    ticker: stockTicker,
    sector,
    divHistory,
  }: any = stockDetails || {};

  console.log(divHistory);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <h1>{name}</h1>
        <small>{`Stock Symbol: ${stockTicker}`}</small>
        <h3> {sector} </h3>
        <BarChart />
      </div>
    </div>
  );
};

export default Stock;
