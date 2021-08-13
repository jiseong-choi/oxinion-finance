import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  EditHoldingsButton,
} from "./styles";

const StockInsert = ({ onInsert }: any) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <InsertForm onSubmit={onSubmitHandler}>
      <InsertInput
        placeholder="Search the stock"
        value={value}
        onChange={onChange}
      />
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

export default StockInsert;
