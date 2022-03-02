import { configureStore } from '@reduxjs/toolkit'
import ReviewReducer from './reducers/ReviewReducer'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    review: ReviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
})
