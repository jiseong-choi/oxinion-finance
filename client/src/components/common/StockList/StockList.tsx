import React from "react";
import StockItem from "../StockItem/StockItem";
import { StockListContainer } from "./styles";

const StockList = ({ stocks }: { stocks: any }) => {
  return (
    <StockListContainer>
      {stocks.map((stock: any) => (
        <StockItem stock={stock} key={stock} />
      ))}
    </StockListContainer>
  );
};

export default StockList;
