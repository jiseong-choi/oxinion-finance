import React, { useState, useRef } from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  // EditHoldingsButton,
} from "./styles";



const CalculatorForm = ({ stock, setStock }: any) => {
  const [stockData, setStockData] = useState({
    symbol: "",
    shares: 0,
    price: 0,
  });

  const symbol = useRef<HTMLInputElement>(null);
  const share = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newStockData = {
      ...stockData,
    };
    //newStockData[fieldName] = fieldValue;

    setStockData(newStockData);
  };

  return (
    <InsertForm onSubmit={onSubmitHandler}>
      <InsertInput
        placeholder="Search the stock symbol"
        ref={symbol}
        name="symbol"
        required
      />
      <InsertInput
        type="number"
        step="any"
        placeholder="Shares"
        ref={share}
        name="shares"
        min="0"
        required
      />
      <InsertInput
        type="number"
        placeholder="avg cost"
        step="any"
        min="0"
        ref={price}
        name="price"
        required
      />
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
