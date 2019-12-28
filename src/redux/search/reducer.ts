/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CurrentState = {
  data: any;
  error: string;
  result: any;
};

interface CurrentSearch {
  limit: number;
  term: string;
  location: string;
}

interface ResultById {
  id: string;
}

const initialState: CurrentState = {
  data: {},
  error: '',
  result: {},
};

const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    getDataSearch: (state, action: PayloadAction<CurrentSearch>) => state,
    getDataSearchSuccess: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    getDataSearchFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
    },
    getResultById: (state, action: PayloadAction<ResultById>) => state,
    getResultByIdSuccess: (state, action: PayloadAction<any>) => {
      state.result = action.payload;
    },
    getResultByIdFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
    },
  },
});

const { actions, reducer } = searchSlice;

export const {
  getDataSearch,
  getDataSearchSuccess,
  getDataSearchFailure,
  getResultById,
  getResultByIdSuccess,
  getResultByIdFailure,
} = actions;

export default reducer;
