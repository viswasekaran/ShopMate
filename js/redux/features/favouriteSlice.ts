import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../api/products/product.type';
import {ToastAndroid} from 'react-native';

export interface FavouriteState {
  favouriteItems: Product[];
}

const initialState: FavouriteState = {
  favouriteItems: [],
};

export const favouriteSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFavourite(state, action) {
      const favItemPayload = action.payload;
      const isItemExist = state.favouriteItems.find(
        item => item.id === favItemPayload.id,
      );
      if (!isItemExist) {
        state.favouriteItems = state.favouriteItems.concat(favItemPayload);
      } else {
        ToastAndroid.show('Already added in favourites', 1500);
      }
    },
    removeFavourite(state, action) {
      const favItemPayload = action.payload;
      const itemIndex = state.favouriteItems.findIndex(
        item => item.id === favItemPayload.id,
      );
      state.favouriteItems.splice(itemIndex, 1);
    },
  },
});

export const {addFavourite, removeFavourite} = favouriteSlice.actions;

export default favouriteSlice.reducer;
