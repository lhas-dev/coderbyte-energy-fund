import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface FundSlice {
  title: string;
  type: string;
  value: number;
  variation: number;
}

const initialState: Array<FundSlice> = [
  {
    title: 'Wind Fund',
    type: 'wind',
    value: 1032.23,
    variation: 3.51,
  },
  {
    title: 'Solar Fund',
    type: 'solar',
    value: 986.61,
    variation: -0.13,
  },
  {
    title: 'Natural Fund',
    type: 'natural',
    value: 1122.95,
    variation: 0.01,
  },
];

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {},
});

export default fundsSlice.reducer;
