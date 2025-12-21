import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SearchStockMovementType } from "../../types/stockMovement";

const initalSearchStockMovementState: SearchStockMovementType = {
  searchInput: "",
  type: "",
  warehouseName: "",
};

const searchStockMovementSlice = createSlice({
  name: "searchStockMovement",
  initialState: initalSearchStockMovementState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setWarehouseName: (state, action: PayloadAction<string>) => {
      state.warehouseName = action.payload;
    },
  },
});

export const { setSearchInput, setType, setWarehouseName } =
  searchStockMovementSlice.actions;
export const searchStockMovementReducer = searchStockMovementSlice.reducer;
