import React from "react";
import { StockItem } from "./styles";

const PortfolioItem = ({ stock, index }: any) => {
  return (
    <StockItem>
      <div className="stock-symbol">{stock.symbol}</div>
      <div className="stock-share">{stock.share}</div>
      <div className="stock-price">${stock.price}</div>
      <button>x</button>
    </StockItem>
  );
};

export default PortfolioItem;
