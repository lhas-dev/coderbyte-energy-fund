import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface FundSlice {
  title: string;
  type: string;
  value: number;
  variation: number;
  price: number;
  biggest: number;
  lowest: number;
  ticker: string;
}

const initialState: Array<FundSlice> = [
  {
    title: 'Wind Fund',
    type: 'wind',
    value: 1032.23,
    variation: 3.51,
    price: 18.23,
    biggest: 19.07,
    lowest: 14.23,
    ticker: 'WFND',
  },
  {
    title: 'Solar Fund',
    type: 'solar',
    value: 986.61,
    variation: -0.13,
    price: 15.66,
    biggest: 18.07,
    lowest: 15.23,
    ticker: 'SFND',
  },
  {
    title: 'Natural Fund',
    type: 'natural',
    value: 1122.95,
    variation: 0.01,
    price: 12.42,
    biggest: 17.07,
    lowest: 13.23,
    ticker: 'NFND',
  },
];

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {},
});

export default fundsSlice.reducer;
