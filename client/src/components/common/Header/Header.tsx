import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderGroup,
  Nav,
  NavLinks,
  StyledLogo,
  Input,
  MobileMenu,
} from "./styles";
import { FaTimes, FaBars } from "react-icons/fa";
import mobileLogo from "../../../Assets/Images/updividend_logo.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <HeaderGroup>
      <StyledLogo>
        <Link to="/">
          <img src={mobileLogo} alt="UpDividend" />
        </Link>
      </StyledLogo>

      <Nav>
        <Input type="text" placeholder="Search for symbols" />
        <MobileMenu onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileMenu>
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
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </NavLinks>
      </Nav>
    </HeaderGroup>
  );
};

export default Header;
