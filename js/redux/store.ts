import {configureStore} from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';
import favouriteSlice from './features/favouriteSlice';

export const store = configureStore({
  reducer: {productSlice, cartSlice, favouriteSlice},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
