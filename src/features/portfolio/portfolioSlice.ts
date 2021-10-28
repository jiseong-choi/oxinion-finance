import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAssets: (state, action) => {},
  },
});

export const { addAssets } = portfolioSlice.actions;

export default portfolioSlice.reducer;
