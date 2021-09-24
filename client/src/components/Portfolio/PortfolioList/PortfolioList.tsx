import React, { useState } from "react";

const Portfolio = () => {
  const [stocks, setStocks] = useState([
    {
      symbol: "AAPL",
      shares: "10.234",
      price: "240",
      marketValue: "2400",
      yield: "0.5",
    },
  ]);
  return <div>list</div>;
};

export default Portfolio;
