import React, { useCallback, useState } from "react";
import Header from "../../components/common/Header/Header";
import { CalculatorLayout, CalculatorHeader } from "./styles";
import CalculatorForm from "../../components/Calculator/CalculatorForm/CalculatorForm";
import Portfolio from "../../components/Calculator/Portfolio/Portfolio";
import CalculatorSummary from "../../components/Calculator/Calculator";

const Calculator = () => {
  const [stock, setStock] = useState();
  const [totalDividend, setTotalDividend] = useState(0);

  return (
    <div>
      <Header />
      <CalculatorLayout>
        <h1>Dividend calculator</h1>

        <CalculatorHeader>
          <h1>Your Amazing Portfolio</h1>
        </CalculatorHeader>

        <CalculatorSummary totalDividend={totalDividend} />

        <CalculatorForm stock={stock} setStock={setStock} />

        <Portfolio />
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
