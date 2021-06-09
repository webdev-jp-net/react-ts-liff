import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import dialog from './dialog';
import hogefuga from './hogefuga';

const reducer = combineReducers({
  dialog,
  hogefuga,
});

const middleware = getDefaultMiddleware({ serializableCheck: false });
export const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof reducer>;
