import React from "react";
import { PortfolioHeader, SummaryContainer } from "./styles";

const Calculator = ({ totalStock }: any) => {
  return (
    <SummaryContainer>
      <h1>Dividend calculator</h1>
      <PortfolioHeader>
        <h1>Your Amazing Portfolio</h1>
      </PortfolioHeader>
      <div>
        <p>Portfolio Value</p>
        <h3>${totalStock}</h3>
      </div>
      <div>
        <p>Expected Income</p>
        <h3>$0.00</h3>
      </div>
      <div>
        <p>Portfolio Yield</p>
        <h3>0.00%</h3>
      </div>
    </SummaryContainer>
  );
};

export default Calculator;
