import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StorageLocationSearch } from "../../types/storagelocation";

const initialSearchState: StorageLocationSearch = {
  searchTerm: "",
  warehouseName: "",
};

const locationStorageSearchSlice = createSlice({
  name: "locationStorageSearch",
  initialState: initialSearchState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setWarehouseName(state, action: PayloadAction<string>) {
      state.warehouseName = action.payload;
    },
  },
});

export const { setSearchTerm, setWarehouseName } =
  locationStorageSearchSlice.actions;
export const locationStorageSearchReducer = locationStorageSearchSlice.reducer;
