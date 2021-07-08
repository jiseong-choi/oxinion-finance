import React from "react";
import StockItem from "../StockItem/StockItem";
import { StockListContainer } from "./styles";

const StockList = () => {
  return (
    <StockListContainer>
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
    </StockListContainer>
  );
};

export default StockList;
