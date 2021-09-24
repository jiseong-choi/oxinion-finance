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

export const PortfolioHead = styled.div`
  background-color: rgb(117, 201, 250);
  padding: 0.5rem;
  display: flex;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
