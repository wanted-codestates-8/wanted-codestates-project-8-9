import { createSlice } from '@reduxjs/toolkit'
import initialData from './balaan.json'

const initialState = {
  data: initialData,
}

const review = createSlice({
  name: 'reviewReducer',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload)
    },

    like: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload
      )
      pickedReview.like++
    },

    comment: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload.productId
      )

      pickedReview.comments.push(action.payload.newComment)
    },

    recomment: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload.productId
      )
      pickedReview.comments[action.payload.idx].recomment.push(
        action.payload.recomment
      )
    },
  },
})

export const { add, like, comment, recomment } = review.actions
export default review.reducer
