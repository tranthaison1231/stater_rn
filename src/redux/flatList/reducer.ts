import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

type SliceState = {
  data: any;
};

const initialState: SliceState = {
  data: [],
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'FlatList',
  initialState,
  reducers: {
    getDataFlatListSuccess: (state, action: PayloadAction<any>): void => {
      state.data = state.data.concat(action.payload);
    },
    setLoading: (state, action: PayloadAction<any>): void => {
      state.isLoading = action.payload;
    },
  },
});

export const getDataFlatList = createAction('FlatList/getDataFlatList');

export const { getDataFlatListSuccess, setLoading } = actions;

export default reducer;
