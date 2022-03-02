import { configureStore } from '@reduxjs/toolkit'
import ReviewReducer from './reducers/ReviewReducer'

export const store = configureStore({
  reducer: {
    review: ReviewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
