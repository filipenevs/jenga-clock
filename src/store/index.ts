import { combineReducers, configureStore } from '@reduxjs/toolkit'

 import gameSliceReducer from './reducers/gameSlice'

const reducer = combineReducers({ gameSliceReducer })

const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
