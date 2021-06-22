import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContent>This is the main page</HomeContent>
    </div>
  );
};

export default Home;
