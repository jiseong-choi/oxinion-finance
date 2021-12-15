import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderGroup,
  Nav,
  NavLinks,
  StyledLogo,
  Input,
  MobileMenu,
  NavLink,
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
          <NavLink>
            <Link to="/portfolio">Portfolio</Link>
          </NavLink>
          <NavLink>
            <Link to="/crypto">Crypto</Link>
          </NavLink>
          <NavLink>
            <Link to="/screener">Screeners</Link>
          </NavLink>
          <NavLink>
            <Link to="/calendar">Calendar</Link>
          </NavLink>
          <NavLink>
            <Link to="/tools">Tools</Link>
          </NavLink>
          <NavLink>
            <Link to="/docs">Docs</Link>
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderGroup>
  );
};

export default Header;
