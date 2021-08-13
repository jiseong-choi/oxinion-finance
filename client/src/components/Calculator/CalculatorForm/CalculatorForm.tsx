import React, { useRef } from "react";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  // EditHoldingsButton,
} from "./styles";

const CalculatorForm = ({ stock, setStock }: any) => {
  const symbol = useRef<HTMLInputElement>(null);
  const share = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    // setStock([
    //   ...stock,
    //   {
    //     symbol: symbol.current?.value,
    //     share: share.current?.value,
    //     price: price.current?.value,
    //   },
    // ]);

    setStock([
      ...stock,
      {
        symbol: symbol.current?.value,
        share: share.current?.value,
        price: price.current?.value,
      },
    ]);

    if (symbol.current && share.current && price.current) {
      symbol.current.value = "";
      share.current.value = "";
      price.current.value = "";
    }
  };

  return (
    <InsertForm onSubmit={onSubmitHandler}>
      <InsertInput placeholder="Search the stock symbol" ref={symbol} />
      <InsertInput
        type="number"
        step="any"
        placeholder="Shares"
        ref={share}
        min="0"
      />
      <InsertInput type="number" placeholder="avg cost" min="0" ref={price} />
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
