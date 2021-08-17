import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  min-height: 30rem;
  font-size: 0.8rem;
  line-height: 1.2;
`;

const DataExample = () => {
  let data = {
    stock: {
      symbol: "JPM",
      name: "JPMorgan Chase & Co",
      exDividendDate: "2021-07-21",
      paymentMonth: [1, 4, 7, 10],
      website:
        "https://www.nasdaq.com/market-activity/stocks/wm/dividend-history",
      cashAmount: 0.9,
      sector: "Financial",
    },
  };

  return (
    <div>
      <h1>Call all financial data through UpDividend API</h1>
      <TextArea
        rows={7}
        readOnly={true}
        value={JSON.stringify(data, undefined, 4)}
      ></TextArea>
    </div>
  );
};

export default DataExample;
