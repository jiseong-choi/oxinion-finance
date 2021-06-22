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
      <Calculator>This is a calculator tool for your income</Calculator>
    </div>
  );
};

export default Calculator;
