import React from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  EditHoldingsButton,
} from "./styles";

const StockInsert = () => {
  return (
    <InsertForm>
      <InsertInput placeholder="Search the stock" />
      <AddButton type="submit">
        <MdAdd />
      </AddButton>
      <EditHoldingsButton>Edit Holdings</EditHoldingsButton>
    </InsertForm>
  );
};

export default StockInsert;
