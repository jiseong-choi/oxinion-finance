import React, { useState } from "react";
import axios from "axios";
import { MdAdd } from "react-icons/md";
import {
  InsertInput,
  AddButton,
  InsertForm,
  // EditHoldingsButton,
} from "./styles";

const CalculatorForm = ({ stock, setStock }: any) => {
  const [tickerSymbol, setTickerSymbol] = useState("");
  const [shares, setShares] = useState("");
  const [avgCost, setAvgCost] = useState("");

  // const ticker = useRef<HTMLInputElement>(null);
  // const share = useRef<HTMLInputElement>(null);
  // const cost = useRef<HTMLInputElement>(null);

  // const onSubmitHandler = (e: any) => {
  //   e.preventDefault();
  // };

  const postData = () => {
    const data = {
      ticker: tickerSymbol,
      share: shares,
      cost: avgCost,
    };
    axios.post("http://localhost:5000/create", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <InsertForm>
      <InsertInput
        placeholder="Search the stock symbol"
        name="ticker"
        required
        value={tickerSymbol}
        onChange={(e) => setTickerSymbol(e.target.value)}
      />
      <InsertInput
        type="number"
        step="any"
        placeholder="Shares"
        name="share"
        min="0"
        required
        value={shares}
        onChange={(e) => setShares(e.target.value)}
      />
      <InsertInput
        type="number"
        placeholder="avg cost"
        step="any"
        min="0"
        name="cost"
        required
        value={avgCost}
        onChange={(e) => setAvgCost(e.target.value)}
      />
      <AddButton type="submit" onClick={() => postData()}>
        <MdAdd /> Add to Portfolio
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
