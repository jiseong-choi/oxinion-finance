import React from "react";
import Header from "../../components/common/Header/Header";
import ScreenerMenu from "../../components/Screener/Screener";
import StockList from "../../components/Screener/ScreenerList/ScreenerList";
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
