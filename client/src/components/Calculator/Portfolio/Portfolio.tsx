import React, { useState } from "react";
import { PortfolioTable, TableHead, TableData } from "./styles";

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
  return (
    <div>
      <PortfolioTable>
        <thead>
          <tr>
            <TableHead>Symbol</TableHead>
            <TableHead>Shares</TableHead>
            <TableHead>Avg Cost</TableHead>
            <TableHead>Market Value</TableHead>
            <TableHead>Dividend Yield</TableHead>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr>
              <TableData>{stock.symbol}</TableData>
              <TableData>{stock.shares}</TableData>
              <TableData>{stock.price}</TableData>
              <TableData>${stock.marketValue}</TableData>
              <TableData>{stock.yield}%</TableData>
            </tr>
          ))}
        </tbody>
      </PortfolioTable>
    </div>
  );
};

export default Portfolio;
