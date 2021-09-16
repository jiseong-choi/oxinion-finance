import styled from "styled-components";

export const CalculatorLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const CalculatorHeader = styled.div`
  background-color: #03218d;
  color: white;
  width: 100%;
  padding: 30px;
  font-size: 1.5rem;
  text-align: center;
`;

export const CalculatorSummary = styled.div`
  display: flex;
  margin: 1rem;
  div {
    padding: 1rem;
  }
`;
