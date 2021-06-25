import React from "react";
import { Link } from "react-router-dom";
import { HeaderGroup, Nav, NavLinks, StyledLogo, Input } from "./styles";

import logo from "../../../Assets/Images/dividenddb_logo.png";

const Header = () => {
  return (
    <HeaderGroup>
      <StyledLogo>
        <Link to="/">
          <img src={logo} alt="Dividend Kings" />
        </Link>
      </StyledLogo>
      
      <Nav>
        <Input type="text" placeholder="Search for symbols" />
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
