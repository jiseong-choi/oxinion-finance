import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import { ProfileContainer, ProfileIntro } from "./styles";
import TradingviewChart from "../TradingView/TradingviewChart";

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

  const {
    name,
    ticker: stockTicker,
    sector,
    imageUrl,
  }: any = stockDetails || {};

  return (
    <div>
      <Header />
      <ProfileContainer>
        <ProfileIntro>
          <img src={imageUrl} alt="" />
          <div>
            <h4>{name}</h4>
            <small>{`Stock Symbol: ${stockTicker}`}</small>
          </div>
        </ProfileIntro>
        <div>
          hey its here!!! for individual stock profile page
          <h3> {sector} </h3>
        </div>

        <div>
          <TradingviewChart stockDetails={stockDetails} />
        </div>
      </ProfileContainer>
    </div>
  );
};

export default StockProfile;

// import React from "react";

// const StockDetails = () => {
//   return <div></div>;
// };

// export default StockDetails;
