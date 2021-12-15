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
  justify-content: flex-end;
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
  display: none;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: block;
  color: black;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.li`
  margin-left: 1rem;
  text-decoration: none;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const StyledLogo = styled.div`
  width: 80%;
  height: 90%;
  img {
    height: 100%;
    @media (min-width: 768px) {
      /* background-image: url(../Assets/Images/dividenddb_logo.png); */
    }
  }
`;
