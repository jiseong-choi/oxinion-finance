import React, { useEffect, useState } from "react";
import axios from "axios";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import { ListContainer, PortfolioHead } from "./styles";

const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((res: any) => setData(res.data));
  }, []);

  return (
    <ListContainer>
      <PortfolioHead>
        <p>Ticker</p>
        <p>Shares</p>
        <p>Avg Cost</p>
      </PortfolioHead>
      {data.map((stock: any) => (
        <PortfolioItem
          ticker={stock.ticker}
          id={stock._id}
          key={stock._id}
          share={stock.share}
          cost={stock.cost}
        />
      ))}
    </ListContainer>
  );
};

export default Portfolio;
