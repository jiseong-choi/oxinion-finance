import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header/Header";
import { Button } from "../../components/common/Button";
import HomeImg from "../../Assets/Images/smartphone.png";
import DataExample from "../../components/DataExample";

const HomeContent = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin-top: 5rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DescContent = styled.div``;

const Title = styled.div`
  h1 {
    font-size: 3rem;
  }
`;

const ImgExpression = styled.div`
  background-image: url(${HomeImg});
  display: block;
  background-repeat: no-repeat;
  height: 100%;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContent>
        <DescContent>
          <Title>
            <h1>
              Maximise your <br />
              dividend income
            </h1>
            <p>
              Dividend King is a tool to track Everything You Need to Know About
              <span>Dividends</span>.Sign up and get started today.
            </p>
          </Title>
          <Button type="button">Get Started</Button>
        </DescContent>
        <ImgExpression> </ImgExpression>
        <DataExample />
      </HomeContent>
    </div>
  );
};

export default Home;
