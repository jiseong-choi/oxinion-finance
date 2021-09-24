import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <p>Ticker</p>
        <p>Shares</p>
        <p>Avg Cost</p>
      </div>
      {data.map((stock: any) => (
        <PortfolioItem
          ticker={stock.ticker}
          key={stock.id}
          id={stock.id}
          share={stock.share}
          cost={stock.cost}
        />
      ))}
    </div>
  );
};

export default Portfolio;
