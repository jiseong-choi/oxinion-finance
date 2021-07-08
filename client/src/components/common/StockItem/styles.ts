import styled from "styled-components";

export const StockListItem = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: white;
  }
`;

export const StockAlert = styled.p`
  background-color: #e3e5e6;
  width: 100%;
`;
