import {
  type InventoryInputTypes,
  type SearchType,
} from "../../types/inventory";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialInventoryInputState: InventoryInputTypes[] = [];
const initialSearchState: SearchType = {
  dataSearch: "",
  categorySearch: "",
  warehouseSearch: "",
};

const InventoryInputSlice = createSlice({
  name: "inventoryInput",
  initialState: initialInventoryInputState,
  reducers: {
    addNewRow(state: InventoryInputTypes[]) {
      state.push({
        id: Date.now(), // Add unique ID
        sku: "",
        productName: "",
        category: "",
        warehouseLocation: "",
        rackLocation: "",
        quantityInStock: 0,
        reorderLevel: 0,
        unitOfMeasure: "",
        costPerUnit: 0,
      });
    },
    removeRow(state: InventoryInputTypes[], action) {
      return state.filter((row) => row.id !== action.payload);
    },
    updateRow(state: InventoryInputTypes[], action) {
      const { id, field, value } = action.payload;
      const row = state.find((row) => row.id === id);
      if (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (row as any)[field] = value;
      }
    },
    clearAll() {
      return initialInventoryInputState;
    },
  },
});

const SearchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setDataSearch(state, action: PayloadAction<string>) {
      state.dataSearch = action.payload;
    },
    setCategorySearch(state, action: PayloadAction<string>) {
      state.categorySearch = action.payload;
    },
    setWarehouseSearch(state, action: PayloadAction<string>) {
      state.warehouseSearch = action.payload;
    },
  },
});

export const { addNewRow, removeRow, updateRow, clearAll } =
  InventoryInputSlice.actions;
export const InventoryInputReducer = InventoryInputSlice.reducer;
export const { setDataSearch, setCategorySearch, setWarehouseSearch } =
  SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;
