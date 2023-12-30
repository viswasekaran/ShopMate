import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../api/products/product.type';

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      return {...state, products: [...action.payload]};
    },
  },
});

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;
