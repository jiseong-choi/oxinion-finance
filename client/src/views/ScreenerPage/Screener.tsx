import React from "react";
import Header from "../../components/common/Header/Header";
import ScreenerMenu from "../../components/Screener/Screener";
import ScreenList from "../../components/Screener/ScreenerList/ScreenerList";
import { ScrennerContainer } from "./styles";

const Screener = () => {
  return (
    <ScrennerContainer>
      <Header />
      <h2>Screener</h2>
      <ScreenerMenu />
      <ScreenList />
    </ScrennerContainer>
  );
};

export default Screener;
