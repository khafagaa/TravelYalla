import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import dataFile from './file';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    restuarantProducts: dataFile,
    newProduct: null,
  },
  reducers: {
    payloadPorduct: (state: any, action) => {
      console.log(`here  ${JSON.stringify(action.payload)}`);
      return {
        ...state,
        restuarantProducts: action.payload,
      };
    },
  },
});

export const {payloadPorduct} = productSlice.actions;
export default productSlice.reducer;
