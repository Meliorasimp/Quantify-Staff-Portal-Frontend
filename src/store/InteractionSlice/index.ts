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
  isUpdateInventoryModalOpen: false,
  updateId: undefined,
  isDeleteStorageLocationModalOpen: false,
  deleteStorageLocationId: undefined,
  deleteStorageLocationName: undefined,
  isPurchaseOrderModalOpen: false,
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
    setIsUpdateInventoryModalOpen(state, action) {
      state.isUpdateInventoryModalOpen = action.payload;
    },
    setUpdateId(state, action) {
      state.updateId = action.payload;
    },
    setIsDeleteStorageLocationModalOpen(state, action) {
      state.isDeleteStorageLocationModalOpen = action.payload;
    },
    setDeleteStorageLocationId(state, action) {
      state.deleteStorageLocationId = action.payload;
    },
    setDeleteStorageLocationName(state, action) {
      state.deleteStorageLocationName = action.payload;
    },
    setIsPurchaseOrderModalOpen(state, action) {
      state.isPurchaseOrderModalOpen = action.payload;
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
  setIsUpdateInventoryModalOpen,
  setUpdateId,
  setIsDeleteStorageLocationModalOpen,
  setDeleteStorageLocationId,
  setDeleteStorageLocationName,
  setIsPurchaseOrderModalOpen,
} = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
