import { type InteractionType } from "../../types/interaction";
import { createSlice } from "@reduxjs/toolkit";

const initialInteractionState: InteractionType = {
  //Register Modal State Logic
  isRegisterModalOpen: false,
  //Login Modal State Logic
  isLoginModalOpen: false,
  //Inventory Modal State Logic
  isInventoryModalOpen: false,
  //Warehouse Modal State Logic
  isWarehouseModalOpen: false,
  //Storage Location Modal State Logic
  isStorageLocationModalOpen: false,
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState: initialInteractionState,
  reducers: {
    //Register Modal Reducers
    setIsRegisterModalOpen(state, action) {
      state.isRegisterModalOpen = action.payload;
    },
    //Login Modal Reducers
    setIsLoginModalOpen(state, action) {
      state.isLoginModalOpen = action.payload;
    },
    //Inventory Modal Reducers
    setIsInventoryModalOpen(state, action) {
      state.isInventoryModalOpen = action.payload;
    },
    //Switch Modals Reducers
    switchToLoginModal(state) {
      state.isRegisterModalOpen = false;
      state.isLoginModalOpen = true;
    },
    switchToRegisterModal(state) {
      state.isRegisterModalOpen = true;
      state.isLoginModalOpen = false;
    },
    //Warehouse Modal Reducers
    setIsWarehouseModalOpen(state, action) {
      state.isWarehouseModalOpen = action.payload;
    },
    //Storage Location Modal Reducers
    setIsStorageLocationModalOpen(state, action) {
      state.isStorageLocationModalOpen = action.payload;
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
} = interactionSlice.actions;
export const interactionReducer = interactionSlice.reducer;
