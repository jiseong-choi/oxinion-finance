import React from "react";
import { MdAdd } from "react-icons/md";
import { InsertInput, AddButton, InsertForm } from "./styles";

const StockInsert = () => {
  return (
    <InsertForm>
      <InsertInput placeholder="Search the stock" />
      <AddButton type="submit">
        <MdAdd />
      </AddButton>
    </InsertForm>
  );
};

export default StockInsert;
