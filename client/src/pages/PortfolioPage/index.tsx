import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header/Header";
import { PortfolioLayout, PortfolioHeader } from "./styles";
import PortfolioForm from "../../components/Portfolio/PortfolioForm/PortfolioForm";
import Portfolio from "../../components/Portfolio/Portfolio/Portfolio";
import CalculatorSummary from "../../components/Portfolio/Calculator";

const Calculator = () => {
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
        <h1>Dividend calculator</h1>
        <PortfolioHeader>
          <h1>Your Amazing Portfolio</h1>
        </PortfolioHeader>
        <CalculatorSummary totalStock={totalStock} />
        <PortfolioForm stock={stock} setStock={setStock} />

        <Portfolio />
      </PortfolioLayout>
    </div>
  );
};

export default Calculator;
