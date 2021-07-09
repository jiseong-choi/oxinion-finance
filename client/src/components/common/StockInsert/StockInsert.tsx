import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  EditHoldingsButton,
} from "./styles";

const StockInsert = (onInsert: any) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  const onClick = useCallback(() => {
    onInsert(value);
    setValue("");
  }, [onInsert, value]);

  return (
    <InsertForm onSubmit={onSubmit}>
      <InsertInput
        placeholder="Search the stock"
        value={value}
        onChange={onChange}
      />
      <AddButton type="submit" onClick={onClick}>
        <MdAdd />
      </AddButton>
      <EditHoldingsButton>Edit Holdings</EditHoldingsButton>
    </InsertForm>
  );
};

export default StockInsert;
