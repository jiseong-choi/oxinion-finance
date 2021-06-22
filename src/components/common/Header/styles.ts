import styled from "styled-components";

export const HeaderGroup = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: #f4f7fb;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Input = styled.input`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;

  &:focus {
    outline: none;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

export const StyledLogo = styled.div`
  width: 128px;
  height: 100%;
  img {
    height: 100%;
  }
`;
