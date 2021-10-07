import React from "react";
import Header from "../../components/common/Header/Header";
import ScreenerMenu from "./Screener/Screener";
import ScreenList from "./Screener/ScreenerList/ScreenerList";
import { ScrennerContainer } from "./styles";

const Screener = () => {
  return (
    <ScrennerContainer>
      <Header />
      <h1>Screener</h1>
      <h2>Top dividend stocks</h2>
      <ScreenerMenu />
      <ScreenList />
      <div className="main">main</div>
    </ScrennerContainer>
  );
};

export default Screener;
