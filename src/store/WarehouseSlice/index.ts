import {
  type WarehouseInputTypes,
  type IndividualWarehouseType,
} from "../../types/warehouse";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialWarehouseInputState: WarehouseInputTypes[] = [];
const initialIndividualWarehouseState: IndividualWarehouseType = {
  warehouseName: "",
};

const warehouseSlice = createSlice({
  name: "warehouseInput",
  initialState: initialWarehouseInputState,
  reducers: {
    addNewRow(state: WarehouseInputTypes[]) {
      state.push({
        id: Date.now(), // Add unique ID
        warehouseName: "",
        warehouseCode: "",
        address: "",
        manager: "",
        contactEmail: "",
        region: "",
        status: "active", // Default to active status
      });
    },
    removeRow(state: WarehouseInputTypes[], action: PayloadAction<number>) {
      return state.filter((row) => row.id !== action.payload);
    },
    updateRow(state: WarehouseInputTypes[], action) {
      const { id, field, value } = action.payload;
      const row = state.find((row) => row.id === id);
      if (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (row as any)[field] = value;
      }
    },
  },
});

const individualWarehouseSlice = createSlice({
  name: "individualWarehouse",
  initialState: initialIndividualWarehouseState,
  reducers: {
    setWareHouse: (state, action: PayloadAction<string>) => {
      state.warehouseName = action.payload;
    },
  },
});

export const { addNewRow, removeRow, updateRow } = warehouseSlice.actions;
export const warehouseReducer = warehouseSlice.reducer;
export const { setWareHouse } = individualWarehouseSlice.actions;
export const individualWarehouseReducer = individualWarehouseSlice.reducer;
