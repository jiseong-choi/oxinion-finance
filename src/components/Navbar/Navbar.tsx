import React from "react";
import styled from "styled-components";
import MenuItems from "./MenuItems";

const Nav = styled.nav``;

const Navbar = () => {
  return (
    <Nav>
      <img src={require("../../Assets/Images/dk_logo.png")} alt="DK_logo" />
      <input type="text" placeholder="Search for symbols or companies" />
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navbar;
