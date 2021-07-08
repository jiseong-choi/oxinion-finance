import React from "react";
import { StockAlert, StockListItem } from "./styles";

const StockItem = () => {
  return (
    <StockListItem>
      <h2>MA</h2>
      <small>0.026782 shares</small>

      <div>Expected div : $0.01</div>
      <div>$0.25 per share</div>
      <StockAlert>Will be payed on June 24</StockAlert>
    </StockListItem>
  );
};

export default StockItem;
