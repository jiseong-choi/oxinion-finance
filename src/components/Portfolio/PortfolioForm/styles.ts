import styled from "styled-components";

export const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  margin: 2rem;
  justify-content: center;
  box-sizing: content-box;
  border-style: solid;
  border-image: linear-gradient(to right, #76baff, #a053df);
  border-image-slice: 1;
  border-radius: 10px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #0f55de;
  }
`;

export const EditHoldingsButton = styled.button`
  width: auto;
  height: 48px;
  min-width: 48px;
  min-height: auto;
  border-radius: 24px;
  padding: 0.75rem 1.25rem;
  background-color: #f4f5f7;
  color: #000;
  font-weight: 400;
  cursor: pointer;
`;
