import React from "react";
import {
  DashboardContainer,
  ExchangeButton,
  PrimaryCurrency,
  SecondaryCurrency,
} from "./styles";
import { RiExchangeLine } from "react-icons/ri";
const Dashboard = () => {
  return (
    <div>
      <h1>BNB to USD Converter</h1>
      <DashboardContainer>
        <PrimaryCurrency>
          <img src="https://picsum.photos/50" alt="" />
          <div>
            <span>BNB</span>
            <p>Binance Coin</p>
          </div>
          <input type="text" placeholder="0.0022" />
        </PrimaryCurrency>
        <SecondaryCurrency>
          <img src="https://picsum.photos/51" alt="" />
          <div>
            <span>USD</span>
            <p>United States Dollar</p>
          </div>
          <input type="text" placeholder="1" />
        </SecondaryCurrency>
        <ExchangeButton>
          <RiExchangeLine size={30} />
        </ExchangeButton>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
