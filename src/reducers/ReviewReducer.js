import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

const review = createSlice({
  name: 'reviewReducer',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload)
    },

    change: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload.id
      )
      pickedReview.reviewTitle = action.payload.newComment
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
      pickedReview.comments.push(action.payload.reComment)
    },

    reComment: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.productId
      )
      const pickedComment = pickedReview[action.idx]
      pickedComment.reComment.push(action.reComment)
    },
  },
})

export const { add, change, like, comment, reComment } = review.actions
export default review.reducer
