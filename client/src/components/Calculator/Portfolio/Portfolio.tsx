import React from "react";
import { PortfolioTable, TableHead, TableData } from "./styles";

const Portfolio = () => {
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
          <tr>
            <TableData>AAPL</TableData>
            <TableData>10.2354</TableData>
            <TableData>$122.34</TableData>
            <TableData>$1234.56</TableData>
            <TableData>0.12%</TableData>
          </tr>
        </tbody>
      </PortfolioTable>
    </div>
  );
};

export default Portfolio;
