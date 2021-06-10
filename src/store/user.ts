import { createSlice } from '@reduxjs/toolkit';

type State = {
  userid?: string;
};

const initialState: State = {};

const user = createSlice({
  name: 'user',

  initialState,

  reducers: {
    updateUserid: (state, action) => {
      const result: {
        userid: string;
      } = {
        userid: action.payload,
      };
      return {
        ...state,
        ...result,
      };
    },
  },
});

// Action Creators
export const { updateUserid } = user.actions;

// Reducer
export default user.reducer;
