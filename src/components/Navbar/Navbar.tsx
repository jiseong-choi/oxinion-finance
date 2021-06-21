import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../Assets/Images/dk_logo.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} alt="Dividend Kings" />
      <input type="text" placeholder="Search for symbols" />
      <NavLinks>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
