import React from "react";
import styled from "styled-components";

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
      <h3>Logo</h3>
      <input type="text" placeholder="Search for symbols" />
      <NavLinks>
        <li>Calendar</li>
        <li>Calculator</li>
        <li>Screener</li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
