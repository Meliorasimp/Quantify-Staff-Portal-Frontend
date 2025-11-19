import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StorageLocationSearch } from "../../types/storagelocation";

const initialSearchState: StorageLocationSearch = {
  searchTerm: "",
  warehouseName: "",
  sortBy: "",
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
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearchTerm, setWarehouseName, setSortBy } =
  locationStorageSearchSlice.actions;
export const locationStorageSearchReducer = locationStorageSearchSlice.reducer;
