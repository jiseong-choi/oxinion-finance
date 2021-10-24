import React from "react";
import { useHistory } from "react-router";

const StockCard = (props: any) => {
  const { stock } = props;
  const { name, ticker } = stock;
  let history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        padding: "15px",
        backgroundColor: "#3422d3",
        margin: "10px",
      }}
      onClick={() =>history.push(`/stocks/${ticker}`)}
    >
      <h5>{name}</h5>
      <small>{`Ticker: ${ticker}`}</small>
    </div>
  );
};

export default StockCard;
