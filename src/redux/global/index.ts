import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type StateType = {
  imageUrl: string;
  error: unknown;
};

const initialState: StateType = {
  imageUrl: '',
  error: undefined,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showImage: (state, { payload }) => ({ ...state, imageUrl: payload }),
    hideImage: (state) => ({ ...state, imageUrl: '' }),
    reset: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload['global'],
      };
    },
  },
});

export const { actions } = globalSlice;
export const { reducer } = globalSlice;
export default globalSlice;
