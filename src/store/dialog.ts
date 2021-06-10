import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  isOpen: boolean;
  content?: JSX.Element;
  class?: string[];
};

const initialState: State = {
  isOpen: false,
};

const dialog = createSlice({
  name: 'dialog',

  initialState,

  reducers: {
    updateOpen: (state, action: PayloadAction<boolean>) => {
      // open | close
      document.body.classList[action.payload ? 'add' : 'remove']('isFixedScroll');
      return {
        ...state,
        isOpen: action.payload,
        class: action.payload ? state.class : [],
      };
    },
    updateContent: (state, action: PayloadAction<JSX.Element>) => {
      return {
        ...state,
        content: action.payload,
      };
    },
    updateClass: (state, action) => {
      return {
        ...state,
        class: [state.class, ...action.payload],
      };
    },
  },
});

// Action Creator
export const { updateOpen, updateContent, updateClass } = dialog.actions;

// Reducer
export default dialog.reducer;
