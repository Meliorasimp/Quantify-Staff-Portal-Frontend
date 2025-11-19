import { type InteractionType } from "../../types/interaction";
import { createSlice } from "@reduxjs/toolkit";

const initialInteractionState: InteractionType = {
  isRegisterModalOpen: false,
  isLoginModalOpen: false,
  isInventoryModalOpen: false,
  isWarehouseModalOpen: false,
  isStorageLocationModalOpen: false,
  isDeleteInventoryModalOpen: false,
  deleteId: undefined,
  deleteProductName: undefined,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    setIsInventoryModalOpen(state, action) {
      state.isInventoryModalOpen = action.payload;
    },
    switchToLoginModal(state) {
      state.isRegisterModalOpen = false;
      state.isLoginModalOpen = true;
    },
    switchToRegisterModal(state) {
      state.isRegisterModalOpen = true;
      state.isLoginModalOpen = false;
    },
    setIsWarehouseModalOpen(state, action) {
      state.isWarehouseModalOpen = action.payload;
    },
    setIsStorageLocationModalOpen(state, action) {
      state.isStorageLocationModalOpen = action.payload;
    },
    setIsDeleteInventoryModalOpen(state, action) {
      state.isDeleteInventoryModalOpen = action.payload;
    },
    setDeleteId(state, action) {
      state.deleteId = action.payload;
    },
    setDeleteProductName(state, action) {
      state.deleteProductName = action.payload;
    },
  },
});

export const {
  setIsRegisterModalOpen,
  setIsLoginModalOpen,
  setIsInventoryModalOpen,
  switchToLoginModal,
  switchToRegisterModal,
  setIsWarehouseModalOpen,
  setIsStorageLocationModalOpen,
  setIsDeleteInventoryModalOpen,
  setDeleteId,
  setDeleteProductName,
} = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
