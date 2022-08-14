import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface TTHInfoState {
  status: string;
  number: string;
  warehouseSender: string;
  recipientAddress: string;
}

const initialState: TTHInfoState = {
  status: "jnyj",
  number: "jytdj",
  warehouseSender: "djy",
  recipientAddress: "dyjjd",
};

export const tthInfoSlice = createSlice({
  name: "ttnInfo",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<TTHInfoState>) => {
      state.status += action.payload;
      state.number += action.payload;
      state.warehouseSender += action.payload;
      state.recipientAddress += action.payload;
      return { ...state, ttnInfo: action.payload };
    },
  },
});

export const { setInfo } = tthInfoSlice.actions;

export const selectTTHInfo = (state: RootState) => state.ttnInfo;

export default tthInfoSlice.reducer;
