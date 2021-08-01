import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Stock = () => {
  const { ticker }: any = useParams();
  const [stockDetails, setStockDetails] = useState([]);

  // Using useEffect to call the API once mounted
  useEffect(() => {
    axios
      .get(`https://dividenddb.herokuapp.com/stocks/${ticker}`)
      .then((res) => {
        const responseStockDetails = res.data;
        setStockDetails(responseStockDetails);
      });
  }, []);

  console.log(stockDetails);

  return <div>{`this is Stock COMPONENT and symbol is ${ticker}`}</div>;
};

export default Stock;
