import React from "react";
import Header from "../components/common/Header/Header";
import styled from "styled-components";

const Calculator = () => {
  const Calculator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  `;

  return (
    <div>
      <Header />
      <Calculator>
        <h1>Dividend calculator - CRUD(the list)</h1>
        <small>Calculate the value of your latest dividend</small>
        <small>simple or similar as therich app? </small>
        <ul>
          <li className="stock">
            <h2>MA</h2>
            <small>0.026782 shares</small>

            <div>Expected div : $0.01</div>
            <div>$0.25 per share</div>
          </li>
          <li className="stock">
            <h2>PEP</h2>
            <small>2 shares</small>

            <div>Expected div : $${1.075 * 0.85}</div>
            <div>$1.075 per share</div>
          </li>
        </ul>
      </Calculator>
    </div>
  );
};

export default Calculator;
