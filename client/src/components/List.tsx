import React from "react";
import styled from "styled-components";

interface IProps {
  dividends: {
    ticker: string;
    amount: number;
    url: string;
    note?: string;
  }[];
}

const TableList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List: React.FC<IProps> = ({ dividends }) => {
  const dividendsList = (): JSX.Element[] => {
    return dividends.map((dividend) => {
      return (
        <li className="List">
        <div className="List-header">
          <img src={dividend.url} alt="Logo" />
          <h2>{dividend.ticker}</h2>
        </div>
        <small>${dividend.amount}</small>
        <p>{dividend.note}</p>
      </li>
      )
    });
  };

  return <TableList>{dividendsList()}</TableList>;
};

export default List;
