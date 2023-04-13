import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserSlice {
  balance: number;
  portfolio: number;
  variation: number;
}

const initialState: UserSlice = {
  balance: 1457.23,
  portfolio: 1245.23,
  variation: 31.82,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
