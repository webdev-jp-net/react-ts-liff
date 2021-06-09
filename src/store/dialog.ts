import { createSlice } from '@reduxjs/toolkit';

type State = {
  isOpen: boolean;
  content: HTMLElement | null;
  class?: string[];
};

const initialState: State = {
  isOpen: false,
  content: null,
};

const dialog = createSlice({
  name: 'dialog',

  initialState,

  reducers: {
    updateOpen: (state, action) => {
      const result: {
        isOpen: boolean;
        class?: string[];
      } = {
        isOpen: action.payload,
      };
      if (action.payload === true) {
        // open
        document.body.classList.add('isFixedScroll');
      } else {
        // close
        document.body.classList.remove('isFixedScroll');
        result.class = [];
      }
      return {
        ...state,
        ...result,
      };
    },
    updateContent: (state, action) => {
      const result: {
        content: HTMLDivElement;
      } = {
        content: action.payload,
      };
      return {
        ...state,
        ...result,
      };
    },
    updateClass: (state, action) => {
      const result: {
        class: string[];
      } = {
        class: [state.class, ...action.payload],
      };
      return {
        ...state,
        ...result,
      };
    },
  },
});

// Action Creators
export const { updateOpen, updateContent, updateClass } = dialog.actions;

// Reducer
export default dialog.reducer;
