import styled from "styled-components";

export const DashboardContainer = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 16px;
  border: 1px solid #eff2f5
  border-radius: 16px;
  position: relative;
`;

export const PrimaryCurrency = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  padding: 20px 24px;
  background-color: rgb(255, 255, 255);
  -webkit-box-align: center;
  align-items: center;
`;

export const SecondaryCurrency = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  padding: 20px 24px;
  background-color: rgb(248, 250, 253);
  -webkit-box-align: center;
  align-items: center;
  border-top: 1px solid #eff2f5;
`;

export const ExchangeButton = styled.div`
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
