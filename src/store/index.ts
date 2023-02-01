import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import hogefuga from './hogefuga';
import user from './user';

const reducer = combineReducers({
  hogefuga,
  user,
});

const middleware = getDefaultMiddleware({ serializableCheck: false });
export const store = configureStore({ reducer, middleware });

export type RootState = ReturnType<typeof reducer>;
