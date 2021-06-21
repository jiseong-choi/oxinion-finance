import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table";

const SignForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      const result = await axios("https://istock-api.herokuapp.com/stocks");
      setData(result.data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <SignForm>
        <Table columns={columns} data={data} />
      </SignForm>
    </>
  );
};

export default Screener;
