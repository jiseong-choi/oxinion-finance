import React from "react";
import { SummaryContainer } from "./styles";

const Calculator = ({ totalDividend }: any) => {
  return (
    <SummaryContainer>
      <div>
        <p>Portfolio Value</p>
        <h3>$0.00</h3>
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
