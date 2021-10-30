import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";

const StockProfile = () => {
  const { ticker }: any = useParams();
  const [stockDetails, setStockDetails] = useState();

  // Using useEffect to call the API once mounted
  useEffect(() => {
    axios
      .get(`https://oxinionapi.herokuapp.com/stocks?ticker=${ticker}`)
      .then((res) => {
        const responseStockDetails = res.data[0];
        setStockDetails(responseStockDetails);
      });
  }, [ticker]);

  console.log(stockDetails);

  const { ticker: stockTicker, sector }: any = stockDetails || {};

  return (
    <div>
      <Header />
      <div style={{ marginTop: "5rem" }}>
        <small>{`Stock Symbol: ${stockTicker}`}</small>
        <h3> {sector} </h3>
        hey its me here!!! for individual stock profile page
      </div>
    </div>
  );
};

export default StockProfile;

// import React from "react";

// const StockDetails = () => {
//   return <div></div>;
// };

// export default StockDetails;
