import React, { useCallback, useState } from "react";
import Header from "../../components/common/Header/Header";
import {
  CalculatorLayout,
  CalculatorHeader,
  CalculatorSummary,
} from "./styles";
import StockInsert from "../../components/common/StockInsert/StockInsert";
import StockList from "../../components/common/StockList/StockList";

const Calculator = () => {
  const [stocks, setStocks] = useState([
    {
      symbol: "JPM",
      name: "JPMorgan Chase & Co",
      exDividendDate: "2021-07-21",
      paymentMonth: [1, 4, 7, 10],
      website:
        "https://www.nasdaq.com/market-activity/stocks/wm/dividend-history",
      cashAmount: 0.9,
      sector: "Financial",
    },
  ]);
  const onInsert = useCallback(
    (text) => {
      const stock: any = {
        id: text,
        text,
        checked: false,
      };

      setStocks(stocks.concat(stock));
    },
    [stocks]
  );
  return (
    <div>
      <Header />
      <CalculatorLayout>
        <h1>Dividend calculator - CRUD(the list)</h1>

        <CalculatorHeader>
          <h1>Your Amazing Portfolio</h1>
        </CalculatorHeader>

        <CalculatorSummary>
          <div>
            <p>Portfolio Value</p>
            <h3>$7010.66</h3>
          </div>
          <div>
            <p>Expected Income</p>
            <h3>$0.69</h3>
          </div>
          <div>
            <p>Portfolio Yield</p>
            <h3>2.54%</h3>
          </div>
        </CalculatorSummary>
        <StockInsert onInsert={onInsert} />
        <StockList stocks={stocks} />
      </CalculatorLayout>
    </div>
  );
};

export default Calculator;
