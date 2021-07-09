import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { StockAlert, StockListItem, RemoveBox } from "./styles";

const StockItem = () => {
  return (
    <StockListItem>
      <h2>MA</h2>
      <small>0.026782 shares</small>

      <div>Expected div : $0.01</div>
      <div>$0.25 per share</div>
      <StockAlert>Will be paid on June 24</StockAlert>
      <RemoveBox>
        <RiDeleteBin2Line />
      </RemoveBox>
    </StockListItem>
  );
};

export default StockItem;
