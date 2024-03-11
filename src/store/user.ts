import { createSlice } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

type State = {
  userId?: string
}

const initialState: State = {}

const user = createSlice({
  name: 'user',

  initialState,

  reducers: {
    updateUserId: (state, action) => {
      state.userId = action.payload
    },
  },
})

// Action Creators
export const { updateUserId } = user.actions

// Reducer
export default user.reducer

// LocalStorageに保存する設定
export const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['name'],
}
