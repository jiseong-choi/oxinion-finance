import React from "react";
import Header from "../../components/common/Header/Header";
import { PortfolioLayout } from "./styles";
import PortfolioForm from "../../components/Portfolio/PortfolioForm/PortfolioForm";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import Calculator from "../../components/Portfolio/Calculator/Calculator";

const Portfolio = () => {
  // let tempDiv = 0;
  // for (let i = 0; i < stock.length; i++) {
  //   tempDiv += parseInt(stock[i].price) * parseInt(stock[i].share);
  // }
  // setTotalStock(tempDiv);

  return (
    <div>
      <Header />
      <PortfolioLayout>
        <Calculator />
        <PortfolioForm />

        <PortfolioList />
      </PortfolioLayout>
    </div>
  );
};

export default Portfolio;
