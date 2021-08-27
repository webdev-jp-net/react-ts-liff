import { createSlice } from '@reduxjs/toolkit';

type State = {
  userId?: string;
};

const initialState: State = {};

const user = createSlice({
  name: 'user',

  initialState,

  reducers: {
    updateUserId: (state, action) => {
      const result: {
        userId: string;
      } = {
        userId: action.payload,
      };
      return {
        ...state,
        ...result,
      };
    },
  },
});

// Action Creators
export const { updateUserId } = user.actions;

// Reducer
export default user.reducer;
