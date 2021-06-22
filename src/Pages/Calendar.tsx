import React from "react";
import Header from "../components/common/Header/Header";
import styled from "styled-components";

const Calendar = () => {
  const Calendar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  `;

  return (
    <div>
      <Header />
      <Calendar>This is monthly calendar for you</Calendar>
    </div>
  );
};

export default Calendar;
