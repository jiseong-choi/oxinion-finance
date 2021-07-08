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
`;

// export const StockInsert = styled.div`
//   display: flex;
//   background: #495057;
// `;

export const StockList = styled.ul`
  width: 100%;
`;

export const Stock = styled.li`
  width: 80%;
  margin: 70px auto 0px;
  padding: 60px 50px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: rgb(244, 247, 251);
  border-radius: 12px;
  flex-direction: column;
`;

export const StockAlert = styled.p`
  background-color: #e3e5e6;
  width: 100%;
`;
