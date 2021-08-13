import React, { useState, useCallback, useRef } from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  EditHoldingsButton,
} from "./styles";

const CalculatorForm = ({ stock, setStock }: any) => {
  const symbol = useRef<HTMLInputElement>(null);
  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();

    if (symbol !== null) {
      console.log(symbol.current);
    }
  }, []);

  return (
    <InsertForm onSubmit={onSubmitHandler}>
      <InsertInput placeholder="Search the stock symbol" ref={symbol} />
      <InsertInput type="number" step="any" placeholder="Shares" min="0" />
      <InsertInput type="number" placeholder="avg cost" min="0" />
      <AddButton type="submit">
        <MdAdd />
      </AddButton>
      {/* {dividend.length > 0 ? (
        <EditHoldingsButton>Edit Holdings</EditHoldingsButton>
      ) : (
        ""
      )} */}
    </InsertForm>
  );
};

export default CalculatorForm;
