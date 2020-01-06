import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

type SliceState = {
  data: any;
  error: string;
  result: any;
};

interface CurrentSearch {
  limit: number;
  term: string;
  location: string;
}

const initialState: SliceState = {
  data: {},
  error: '',
  result: {},
};

const { actions, reducer } = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    getDataSearchSuccess: (state, action: PayloadAction<any>): void => {
      state.data = action.payload;
    },
    getDataSearchFailure: (state, action: PayloadAction<any>): void => {
      state.error = action.payload.message;
    },
    getResultByIdSuccess: (state, action: PayloadAction<any>): void => {
      state.result = action.payload;
    },
    getResultByIdFailure: (state, action: PayloadAction<any>): void => {
      state.error = action.payload.message;
    },
  },
});

export const getDataSearch = createAction('search/getDataSearch');
export const getResultById = createAction('search/getResultById');
export const {
  getDataSearchSuccess,
  getDataSearchFailure,
  getResultByIdSuccess,
  getResultByIdFailure,
} = actions;

export default reducer;
