import styled from "styled-components";

export const StockItem = styled.div`
  display: flex;
  box-shadow: 0 1px 0 0 #e3edee !important;

  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: 0.4s;
  width: max-content;
  width: 100%;
  justify-content: space-between;
`;

export const PortfolioTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.th`
  background-color: rgb(117, 201, 250);
  padding: 0.5rem;
`;

export const TableData = styled.td`
  background-color: rgb(205, 235, 253);
  text-align: center;
`;

// TableHead,
// TableData {
//   border: 1px solid #ffffff;
//   text-align: left;
//   padding: 8px;
//   font-size: 32px;
// }
