import React, { useCallback, useState } from "react";
import Header from "../../components/common/Header/Header";
import { CalculatorLayout, CalculatorHeader } from "./styles";
import StockInsert from "../../components/StockInsert/StockInsert";
import Portfolio from "../../components/Portfolio/Portfolio";
import CalculatorSummary from "../../components/CalculatorSummary/CalculatorSummary";

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

        <CalculatorSummary />

        <StockInsert />

        <Portfolio />
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
