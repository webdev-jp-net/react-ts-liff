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
      state.userId = action.payload;
    },
  },
});

// Action Creators
export const { updateUserId } = user.actions;

// Reducer
export default user.reducer;
