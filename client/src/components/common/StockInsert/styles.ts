import styled from "styled-components";

export const InsertForm = styled.form`
  display: flex;
  outline: none;
  margin: 2rem;
  width: 90%;
  justify-content: center;
`;

export const InsertInput = styled.input`
  background: none;
  outline: none;
  padding: 1rem;
  border: solid 1px #b0b0b0;
  width: 20rem;
`;

export const AddButton = styled.button`
  background: #0081f2;
  color: white;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border: none;

  &:hover {
    background: #0f55de;
  }
`;
