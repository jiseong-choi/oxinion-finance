import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "../features/portfolio/portfolioSlice";

export const store = configureStore({
  // all slices
  reducer: {
    portfolio: portfolioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
