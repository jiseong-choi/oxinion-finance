import React from "react";
import { Link } from "react-router-dom";
import { HeaderGroup, Nav, NavLinks, StyledLogo } from "./styles";

import logo from "../../../Assets/Images/dk_logo.png";

const Header = () => {
  return (
    <HeaderGroup>
      <Nav>
        <StyledLogo>
          <Link to="/">
            <img src={logo} alt="Dividend Kings" />
          </Link>
        </StyledLogo>

        <input type="text" placeholder="Search for symbols" />
        <NavLinks>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/screener">Screener</Link>
          </li>
        </NavLinks>
      </Nav>
    </HeaderGroup>
  );
};

export default Header;
