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
  status: "",
  number: "",
  warehouseSender: "",
  recipientAddress: "",
};

export const tthInfoSlice = createSlice({
  name: "ttnInfo",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<TTHInfoState>) => {
      state.status = action.payload.status;
      state.number = action.payload.number;
      state.warehouseSender = action.payload.warehouseSender;
      state.recipientAddress = action.payload.recipientAddress;
    },
  },
});

export const { setInfo } = tthInfoSlice.actions;

export const selectTTHInfo = (state: RootState) => state.ttnInfo;

export default tthInfoSlice.reducer;
