import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioState {
  portfolio: Portfolio[];
}

export interface Portfolio {
  ticker: string;
  shares: number;
  cost: number;
}

const initialState: PortfolioState = {
  portfolio: [
    { ticker: "AAPL", shares: 10.234, cost: 130 },
    { ticker: "MSFT", shares: 10.234, cost: 150 },
  ],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<any>) => {
      state.portfolio.push(action.payload);
    },
  },
});

export const { addAsset } = portfolioSlice.actions;

export default portfolioSlice.reducer;
