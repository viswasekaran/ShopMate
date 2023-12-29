import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../api/products/product.type';
import {ToastAndroid} from 'react-native';

export interface CartState {
  cartItems: Product[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      const cartItemPayload = {...action.payload, count: 1};
      const isItemExist = state.cartItems.find(
        item => item.id === cartItemPayload.id,
      );
      if (!isItemExist) {
        state.cartItems = state.cartItems.concat(cartItemPayload);
      } else {
        ToastAndroid.show('Item already in cart', 1500);
      }
    },
    incrementCartItem(state, action) {
      const {id} = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].count += 1;
      } else {
        console.warn(`Item with id ${id} not found in cart.`);
      }
    },
    decrementCartItem(state, action) {
      const {id} = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].count === 1) {
          state.cartItems.splice(itemIndex, 1);
          return;
        }
        state.cartItems[itemIndex].count -= 1;
      } else {
        console.warn(`Item with id ${id} not found in cart.`);
      }
    },
  },
});

export const {addCart, incrementCartItem, decrementCartItem} =
  cartSlice.actions;

export default cartSlice.reducer;
