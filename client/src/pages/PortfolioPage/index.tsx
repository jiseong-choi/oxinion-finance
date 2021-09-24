import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header/Header";
import { PortfolioLayout } from "./styles";
import PortfolioForm from "../../components/Portfolio/PortfolioForm/PortfolioForm";
import PortfolioList from "../../components/Portfolio/PortfolioList/PortfolioList";
import Calculator from "../../components/Portfolio/Calculator/Calculator";

const Portfolio = () => {
  const [stock, setStock] = useState<any[]>([]);
  const [totalStock, setTotalStock] = useState(0);

  useEffect(() => {
    let tempDiv = 0;
    for (let i = 0; i < stock.length; i++) {
      tempDiv += parseInt(stock[i].price) * parseInt(stock[i].share);
    }
    setTotalStock(tempDiv);
  }, [stock]);

  return (
    <div>
      <Header />
      <PortfolioLayout>
        <Calculator />
        <PortfolioForm stock={stock} setStock={setStock} />

        <PortfolioList />
      </PortfolioLayout>
    </div>
  );
};

export default Portfolio;
