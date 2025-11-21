import {
  type InventoryInputTypes,
  type SearchType,
  type UpdateInventoryInput,
} from "../../types/inventory";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialInventoryInputState: InventoryInputTypes[] = [];
const initialSearchState: SearchType = {
  dataSearch: "",
  categorySearch: "",
  warehouseSearch: "",
};
const initialUpdateInventoryState: UpdateInventoryInput = {
  id: 0,
  itemSKU: "",
  productName: "",
  category: "",
  warehouseLocation: "",
  unitOfMeasure: "",
  quantityInStock: 0,
  reorderLevel: 0,
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

const updateInventorySlice = createSlice({
  name: "updateInventory",
  initialState: initialUpdateInventoryState,
  reducers: {
    setId(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    setItemSKU(state, action: PayloadAction<string>) {
      state.itemSKU = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setProductName(state, action: PayloadAction<string>) {
      state.productName = action.payload;
    },
    setQuantityInStock(state, action: PayloadAction<number>) {
      state.quantityInStock = action.payload;
    },
    setReorderLevel(state, action: PayloadAction<number>) {
      state.reorderLevel = action.payload;
    },
  },
});

export const { addNewRow, removeRow, updateRow, clearAll } =
  InventoryInputSlice.actions;
export const InventoryInputReducer = InventoryInputSlice.reducer;

export const { setDataSearch, setCategorySearch, setWarehouseSearch } =
  SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;

export const {
  setId,
  setItemSKU,
  setCategory,
  setProductName,
  setQuantityInStock,
  setReorderLevel,
} = updateInventorySlice.actions;
export const UpdateInventoryReducer = updateInventorySlice.reducer;
