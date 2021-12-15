import React from "react";
import Header from "../../components/common/Header/Header";
import { PortfolioLayout } from "./styles";
import PortfolioForm from "../../components/Portfolio/PortfolioForm/PortfolioForm";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import Calculator from "../../components/Portfolio/Calculator/Calculator";

import pic from "../../Assets/Images/chart.png";
import CustomSelect from "../../components/Portfolio/CustomSelect";

const Portfolio = () => {
  // let tempDiv = 0;
  // for (let i = 0; i < stock.length; i++) {
  //   tempDiv += parseInt(stock[i].price) * parseInt(stock[i].share);
  // }
  // setTotalStock(tempDiv);

  return (
    <div>
      <Header />
      <h1>The stage of Asset Allocation</h1>
      <p>1. Write your target to remember</p>
      <p>2. Expected profit(%), the period, how much you can risk</p>
      <p>
        3. The proportion of equity, bond, real estate, alternatives and cash{" "}
      </p>
      *Stock picking comes in the END!!!a
      <p>
        <strong>Do rebalancing with OXF!</strong>
      </p>
      <PortfolioLayout>
        <Calculator />
        <PortfolioForm />
        <div>
          <small>Stocks</small>
          <small>Bonds</small>
          <small>Commodities</small>
          <small>Cash</small>
        </div>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <h1>Asset Allocation</h1>
          <h1>Model Portfolio</h1>
          <CustomSelect />
          <br />
          <img style={{ width: "30%" }} src={pic} alt="" />
          <h1>Your Portoflio</h1>
          <img style={{ width: "30%" }} src={pic} alt="" />
        </div>
        <PortfolioList />
      </PortfolioLayout>
    </div>
  );
};

export default Portfolio;
