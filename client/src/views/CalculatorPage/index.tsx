import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header/Header";
import { CalculatorLayout, CalculatorHeader } from "./styles";
import CalculatorForm from "../../components/Calculator/CalculatorForm/CalculatorForm";
import Portfolio from "../../components/Calculator/Portfolio/Portfolio";
import CalculatorSummary from "../../components/Calculator/Calculator";

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
      <CalculatorLayout>
        <h1>Dividend calculator</h1>
        <CalculatorHeader>
          <h1>Your Amazing Portfolio</h1>
        </CalculatorHeader>
        <CalculatorSummary totalStock={totalStock} />
        <CalculatorForm stock={stock} setStock={setStock} />

        <Portfolio />
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
