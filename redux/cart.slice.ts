import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "./store";

interface Item {
  id:number;
  quantity:number
}
interface CartState {
  items: Array<Item>;
  max: number
}

const initialState: CartState= { items: [], max: 20 }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state, action: PayloadAction<Item>) => {
      const searchedIndex = state.items?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (searchedIndex > -1) {
        state["items"][searchedIndex].quantity++;
      } else {
        state["items"].push({ ...action.payload, quantity: 1 });
      }
    },
    addQuantityToCart: (state, action: PayloadAction<Item>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item?.quantity === 0) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      }
      if (item) {
        item.quantity = action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    decrementCart: (state, action: PayloadAction<Item>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if(item)
      { 
        if (item?.quantity === 1) {
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          state.items.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    totalItems: (state, action:PayloadAction<number>) => {
      state["totalItems"] = action.payload;
    },
    totalCost: (state, action) => {
      state["totalCost"] = action.payload;
    },
  },
});
export default cartSlice.reducer;
export const {
  incrementCart,
  addQuantityToCart,
  decrementCart,
  removeFromCart,
  totalItems,
  totalCost,
} = cartSlice.actions;
