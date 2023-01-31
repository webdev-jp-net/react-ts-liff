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
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  data: any;
};

const initialState: State = {
  data: false,
};

const {{ inputs.name | camel }} = createSlice({
  name: '{{ inputs.name | camel }}',

  initialState,

  reducers: {
    updateData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

// Action Creator
export const { updateData } = {{ inputs.name | camel }}.actions;

// Reducer
export default {{ inputs.name | camel }}.reducer;

```
