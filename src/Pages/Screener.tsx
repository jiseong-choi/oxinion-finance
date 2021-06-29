import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Header from "../components/common/Header/Header";
import Table from "../components/table/Table";

const SignForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const Screener = () => {
  const [data, setData] = useState([]);

  // Define Columns
  const columns = useMemo(
    () => [
      {
        Header: "Security",
        accessor: "ticker", // accessor is the "key" in the data
      },
      {
        Header: "Cash Amount",
        accessor: "dividend",
      },
      {
        Header: "Payment Date",
        accessor: "paymentDate",
      },
    ],
    []
  );

  // Using useEffect to call the API once mounted
  useEffect(() => {
    (async () => {
      const result = await axios("https://dividenddb.herokuapp.com/stocks");
      setData(result.data);
    })();
  }, []);

  return (
    <>
      <Header />
      <h2>Dividend Screener - filter from OXINION 100</h2>
      several investment ideas with basic info and filter
      <SignForm>
        <Table columns={columns} data={data} />
      </SignForm>
    </>
  );
};

export default Screener;
