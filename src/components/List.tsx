import React from "react";
import styled from "styled-components";

interface IProps {
  dividends: {
    ticker: string;
    dividend: number;
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
  return (
    <TableList>
      {dividends.map((dividend) => {
        return <div>{dividend.ticker}</div>;
      })}
    </TableList>
  );
};

export default List;
