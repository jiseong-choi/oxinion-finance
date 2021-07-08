import React, { useState } from "react";
import Header from "../components/common/Header/Header";
import styled from "styled-components";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());

  const CalendarContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
  `;

  const CalendarList = styled.ul``;

  return (
    <div>
      <Header />
      <CalendarContent>
        <h1>Dividend Calendar</h1>
        Show each month
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
        <h2>Projected Monthly Income</h2>
        <CalendarList>
          <h3>Maybe table style by onClick date?</h3>
          <li>
            <h3>BLK</h3>
            <small>06/23/2021</small>
          </li>
        </CalendarList>
      </CalendarContent>
    </div>
  );
};

export default CalendarPage;
