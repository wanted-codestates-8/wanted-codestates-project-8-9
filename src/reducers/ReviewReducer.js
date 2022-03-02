import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
      productId: 1,
      like: 3,
      comments: [
        {
          userId: 'fac12351',
          content:
            '와 정말 멋진 상품이네요! 저도 당장 가서 사고싶습니다 잇아이템이라고 생각합니다!',
          date: '30주',
          recomment: [
            {
              userId: 'dac1774a',
              content: '저도 그렇게 생각합니다',
              date: '20주',
            },
            {
              userId: 'dac1774a',
              content: '저도 그렇게 생각합니다',
              date: '20주',
            },
          ],
        },
        {
          userId: 'fac12351',
          content:
            '와 정말 멋진 상품이네요! 저도 당장 가서 사고싶습니다 잇아이템이라고 생각합니다!',
          date: '30주',
          recomment: [
            {
              userId: 'dac1774a',
              content: '저도 그렇게 생각합니다',
              date: '20주',
            },
          ],
        },
      ],
    },
  ],
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
      console.log(pickedReview.like, 123123)
      pickedReview.like++
    },

    comment: (state, action) => {
      console.log()
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload.productId
      )

      console.log(pickedReview, 124154123412)
      pickedReview.comments.push(action.payload.newComment)
    },

    recomment: (state, action) => {
      const pickedReview = state.data.find(
        (review) => review.productId === action.payload.productId
      )
      console.log(action.payload, 888)
      pickedReview.comments[action.payload.idx].recomment.push(
        action.payload.recomment
      )
    },
  },
})

export const { add, like, comment, recomment } = review.actions
export default review.reducer
