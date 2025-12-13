import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PurchaseOrderTypes } from "../../types/purchaseorder";

const initialPurchaseOrderState: PurchaseOrderTypes[] = [];

const PurchaseOrderSlice = createSlice({
  name: "purchaseOrders",
  initialState: initialPurchaseOrderState,
  reducers: {
    addPurchaseOrder: {
      reducer: (state, action: PayloadAction<PurchaseOrderTypes>) => {
        state.push(action.payload);
      },
      prepare: (purchaseOrder: Omit<PurchaseOrderTypes, "id">) => {
        const id = crypto.randomUUID();
        return {
          payload: {
            id,
            ...purchaseOrder,
            totalAmount: 0,
            items: [],
          },
        };
      },
    },
    addItemsToCart: (
      state,
      action: PayloadAction<{
        id: string;
        item: {
          productId: number | string;
          productName: string;
          productImage?: string;
          quantity: number;
          price: number;
        };
      }>
    ) => {
      const { id, item } = action.payload;

      const order = state.find((order) => order.id === id);
      if (!order) return;

      const existingItem = order.items.find(
        (i) => i.productId === item.productId
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.price = item.price;
      } else {
        order.items.push(item);
      }
      order.totalAmount = order.items.reduce(
        (total, currentItem) =>
          total + currentItem.price * currentItem.quantity,
        0
      );
    },
    setDeliveryWarehouse: (
      state,
      action: PayloadAction<{ id: string | number; deliveryWarehouse: string }>
    ) => {
      const { id, deliveryWarehouse } = action.payload;
      const order = state.find((order) => order.id === id);
      if (order) {
        order.deliveryWarehouse = deliveryWarehouse;
      }
    },
    setExpectedDeliveryDate: (
      state,
      action: PayloadAction<{
        id: string | number;
        expectedDeliveryDate: string;
      }>
    ) => {
      const { id, expectedDeliveryDate } = action.payload;
      const order = state.find((order) => order.id === id);
      if (order) {
        order.expectedDeliveryDate = expectedDeliveryDate;
      }
    },
    setPurchaseNotes: (
      state,
      action: PayloadAction<{ id: string | number; notes: string }>
    ) => {
      const { id, notes } = action.payload;
      const order = state.find((order) => order.id === id);
      if (order) {
        order.notes = notes;
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ id: string; productId: number | string }>
    ) => {
      const { id, productId } = action.payload;
      const order = state.find((order) => order.id === id);
      if (!order) return;

      order.items = order.items.filter((item) => item.productId !== productId);
      order.totalAmount = order.items.reduce(
        (total, currentItem) =>
          total + currentItem.price * currentItem.quantity,
        0
      );
    },
    clearOrder: () => {
      return initialPurchaseOrderState;
    },
  },
});

export const {
  addPurchaseOrder,
  setDeliveryWarehouse,
  addItemsToCart,
  setExpectedDeliveryDate,
  setPurchaseNotes,
  removeItemFromCart,
  clearOrder,
} = PurchaseOrderSlice.actions;
export const purchaseOrderReducer = PurchaseOrderSlice.reducer;
