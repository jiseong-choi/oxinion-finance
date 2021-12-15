import React from "react";
import Header from "../../components/common/Header/Header";
import Dashboard from "../../components/crypto/Dashboard/Dashboard";
import { CryptoPageLayout } from "./styles";

const CryptoPage = () => {
  return (
    <div>
      <Header />
      <CryptoPageLayout>
        <h1>Crypo dashboard</h1>
        <Dashboard />
        <div>news</div>
        <div>rankings</div>
        <div>How to earn more</div>
      </CryptoPageLayout>
    </div>
  );
};

export default CryptoPage;
