import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import {
  ChartContainer,
  ProfileContainer,
  ProfileImage,
  ProfileIntro,
} from "./styles";
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
          <ProfileImage src={imageUrl} alt="stock logo" />
          <div>
            <h4>{name}</h4>
            <small>{`Stock Symbol: ${stockTicker}`}</small>
            <h3> {sector} </h3>
          </div>
        </ProfileIntro>

        <ChartContainer>
          <TradingviewChart stockDetails={stockDetails} />
        </ChartContainer>
      </ProfileContainer>
      <div>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
};

export default StockProfile;
