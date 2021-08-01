import React from "react";
import Header from "../../components/common/Header/Header";
import ScreenerMenu from "../../components/ScreenerMenu/ScreenerMenu";
import StockList from "../../components/StockList/StockList";
import { ScrennerContainer } from "./styles";

const Screener = () => {
  return (
    <ScrennerContainer>
      <Header />
      <h2>Screener</h2>
      <ScreenerMenu />
      <StockList />
    </ScrennerContainer>
  );
};

export default Screener;
