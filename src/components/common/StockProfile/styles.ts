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

export const ProfileContainer = styled.div`
  margin-top: 5rem;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ProfileIntro = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ProfileImage = styled.img`
  max-width: 100%;
  height: 1rem;
  display: block;

  @media (min-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

export const ChartContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const ProfileIntro2 = styled.div``;
export const ProfileIntro3 = styled.div``;
export const ProfileIntro4 = styled.div``;
