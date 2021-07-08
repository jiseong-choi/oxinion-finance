import React from "react";
import Header from "../../components/common/Header/Header";
import styled from "styled-components";
import { CalculatorLayout } from "./styles";

const Calculator = () => {
  const Stock = styled.li`
    max-width: 300px;
    margin: 70px auto 0px;
    padding: 60px 50px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background: rgb(244, 247, 251);
    border-radius: 12px;
    flex-direction: column;
  `;

  const StockAlert = styled.p`
    background-color: #e3e5e6;
    width: 100%;
  `;

  return (
    <div>
      <Header />
      <CalculatorLayout>
        <h1>Dividend calculator - CRUD(the list)</h1>
        <small>Calculate the value of your latest dividend</small>
        <small>simple or similar as therich app? </small>
        <h1>Overall Expected Dividend: $100</h1>
        <ul>
          <Stock>
            <h2>MA</h2>
            <small>0.026782 shares</small>

            <div>Expected div : $0.01</div>
            <div>$0.25 per share</div>
            <StockAlert>Will be payed on June 24</StockAlert>
          </Stock>
          <Stock>
            <h2>PEP</h2>
            <small>2 shares</small>

            <div>Expected div : $${1.075 * 0.85}</div>
            <div>$1.075 per share</div>
            <StockAlert>Will be payed on June 24</StockAlert>
          </Stock>
        </ul>
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
