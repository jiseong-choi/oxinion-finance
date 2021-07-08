import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 10px;

  &:hover,
  &:focus {
    background: #075cc4;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
  }
`;
