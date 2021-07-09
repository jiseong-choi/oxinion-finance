import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { StockAlert, StockListItem, RemoveBox } from "./styles";

const StockItem = ({ stock }: any) => {
  const { text } = stock;

  return (
    <StockListItem>
      <h2>Name </h2>
      <pre>{text}</pre>
      <small>shares</small>

      <div>Expected div : $0.66</div>
      <div>$0.66 per share</div>
      <StockAlert>Will be paid on June 06</StockAlert>
      <RemoveBox>
        <RiDeleteBin2Line />
      </RemoveBox>
    </StockListItem>
  );
};

export default StockItem;
