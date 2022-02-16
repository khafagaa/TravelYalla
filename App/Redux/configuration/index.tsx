import {configureStore} from '@reduxjs/toolkit';
import RestuarantReducer from '../Restaurants';

export const store = configureStore({
  reducer: {
    Restuarant: RestuarantReducer,
  },
});
