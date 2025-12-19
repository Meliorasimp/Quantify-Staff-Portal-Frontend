import {
  type WarehouseInputTypes,
  type IndividualWarehouseType,
  type UpdateWarehouseType,
} from "../../types/warehouse";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialWarehouseInputState: WarehouseInputTypes[] = [];
const initialIndividualWarehouseState: IndividualWarehouseType = {
  warehouseId: 0,
};
const initialUpdateWarehouseState: UpdateWarehouseType = {
  warehouseName: "",
  warehouseCode: "",
  address: "",
  manager: "",
  contactEmail: "",
  region: "",
  status: "",
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
    setWareHouse: (state, action: PayloadAction<number>) => {
      state.warehouseId = action.payload;
    },
  },
});

const updateWarehouseSlice = createSlice({
  name: "updatewarehouse",
  initialState: initialUpdateWarehouseState,
  reducers: {
    setWarehouseName: (state, action: PayloadAction<string>) => {
      state.warehouseName = action.payload;
    },
    setWareHouseCode: (state, action: PayloadAction<string>) => {
      state.warehouseCode = action.payload;
    },
    setWarehouseAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setWarehouseManager: (state, action: PayloadAction<string>) => {
      state.manager = action.payload;
    },
    setWarehouseContactEmail: (state, action: PayloadAction<string>) => {
      state.contactEmail = action.payload;
    },
    setWarehouseRegion: (state, action: PayloadAction<string>) => {
      state.region = action.payload;
    },
    setWarehouseStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { addNewRow, removeRow, updateRow } = warehouseSlice.actions;
export const warehouseReducer = warehouseSlice.reducer;

export const { setWareHouse } = individualWarehouseSlice.actions;
export const individualWarehouseReducer = individualWarehouseSlice.reducer;

export const {
  setWarehouseName,
  setWareHouseCode,
  setWarehouseAddress,
  setWarehouseManager,
  setWarehouseContactEmail,
  setWarehouseRegion,
  setWarehouseStatus,
} = updateWarehouseSlice.actions;
export const updateWarehouseReducer = updateWarehouseSlice.reducer;
