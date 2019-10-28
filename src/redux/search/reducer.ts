import { createSlice } from 'redux-starter-kit';

const initialState = {
  data: {},
  error: '',
};

const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    getDataSearch: state => state,
    getDataSearchSuccess: (state, { data }) => {
      state.data = data;
    },
    getDataSearchFailure: (state, { error }) => {
      state.error = error;
    },
  },
});

const { actions, reducer } = searchSlice;

export const {
  getDataSearch,
  getDataSearchSuccess,
  getDataSearchFailure,
} = actions;

export default reducer;
