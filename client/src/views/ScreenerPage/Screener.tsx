import React from "react";
import Header from "../../components/common/Header/Header";
import StockList from "../../components/StockList/StockList";
import { ScrennerContainer } from "./styles";

const Screener = () => {
  return (
    <ScrennerContainer>
      <Header />
      <h2>Dividend Screener - filter func</h2>
      several investment ideas with basic info and filter
      <StockList />
    </ScrennerContainer>
  );
};

export default Screener;
