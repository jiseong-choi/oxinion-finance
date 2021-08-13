import React, { useCallback, useState } from "react";
import Header from "../../components/common/Header/Header";
import {
  CalculatorLayout,
  CalculatorHeader,
  CalculatorSummary,
} from "./styles";
import StockInsert from "../../components/StockInsert/StockInsert";
import Portfolio from "../../components/Portfolio/Portfolio";

const Calculator = () => {
  const [dividend, setDividend] = useState();
  const [totalDividend, setTotalDividend] = useState(0);

  return (
    <div>
      <Header />
      <CalculatorLayout>
        <h1>Dividend calculator</h1>

        <CalculatorHeader>
          <h1>Your Amazing Portfolio</h1>
        </CalculatorHeader>

        <CalculatorSummary>
          <div>
            <p>Portfolio Value</p>
            <h3>${totalDividend}</h3>
          </div>
          <div>
            <p>Expected Income</p>
            <h3>${totalDividend}</h3>
          </div>
          <div>
            <p>Portfolio Yield</p>
            <h3>0.00%</h3>
          </div>
        </CalculatorSummary>
        <StockInsert />
        <Portfolio />
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
