import React, { useState } from "react";
import Header from "../components/common/Header/Header";
import styled from "styled-components";
import Calendar from "react-calendar";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  const CalendarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  `;

  return (
    <div>
      <Header />
      <CalendarContent>
        <h1>Projected Monthly Income</h1>
        Show each month
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </CalendarContent>
    </div>
  );
};

export default CalendarPage;
