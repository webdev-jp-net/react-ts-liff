import { createSlice } from '@reduxjs/toolkit'

type State = {
  dummyText: string
}

const initialState: State = {
  dummyText: 'ダミーテキスト',
}

const hogefuga = createSlice({
  name: 'hogefuga',

  initialState,

  reducers: {
    updateDummyText: (state, action) => {
      const result: {
        dummyText: string
      } = {
        dummyText: action.payload,
      }
      return {
        ...state,
        ...result,
      }
    },
  },
})

// Action Creators
export const { updateDummyText } = hogefuga.actions

// Reducer
export default hogefuga.reducer
