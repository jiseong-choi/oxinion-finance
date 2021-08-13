import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ stock, setStock }: any) => {
  return (
    <div style={{ width: "50%" }}>
      {stock.map((stock: any, index: any) => (
        <PortfolioItem key={index} stock={stock} />
      ))}
    </div>
  );
};

export default Portfolio;
