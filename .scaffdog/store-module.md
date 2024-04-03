---
name: "store-module"
root: "src/store"
output: "**/*"
ignore: []
questions:
  name: "Please enter a store module name."
---


# `{{ inputs.name | camel }}.ts`

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

type State = {
  data: any
}

const initialState: State = {
  data: false,
}

const {{ inputs.name | camel }} = createSlice({
  name: '{{ inputs.name | camel }}',

  initialState,

  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: action.payload,
      }
    },
  },
})

// Action Creator
export const { updateData } = {{ inputs.name | camel }}.actions

// Reducer
export default {{ inputs.name | camel }}.reducer

// LocalStorageに保存する設定
export const {{ inputs.name | camel }}PersistConfig = {
  key: '{{ inputs.name | camel }}',
  storage,
  whitelist: ['data'],
}

```
