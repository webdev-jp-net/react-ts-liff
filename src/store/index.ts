import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

import hogefuga from './hogefuga'
import user, { userPersistConfig } from './user'

const reducer = combineReducers({
  hogefuga,
  user: persistReducer(userPersistConfig, user),
})

const middleware = getDefaultMiddleware({ serializableCheck: false })
export const store = configureStore({ reducer, middleware })

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof reducer>
