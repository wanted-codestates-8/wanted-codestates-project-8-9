const ADD = 'review/ADD'
const CHANGE = 'review/CHANGE'
const LIKE = 'review/LIKE'
const RE_COMMENT = 'review/RE_COMMENT'

export const add = (newReview) => ({ type: ADD, newReview })
export const change = (id, newComment) => ({ type: CHANGE, id, newComment })
export const like = (id) => ({ type: LIKE, id })
export const reComment = (id, reComment) => ({
  type: RE_COMMENT,
  id,
  reComment,
})

// {
//   productId: 0,
//   userId: 0,
//   date: null,
//   image: [],
//   like: 0,
//   rating: 0,
//   reviewTitle: null,
//   comments: [],
// },

const initialState = {
  data: [],
}

function review(state = initialState, action) {
  let pickedReview

  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: [...state.data, action.newReview],
      }
    case CHANGE:
      pickedReview = state.data.find((review) => review.productId === action.id)
      pickedReview.reviewTitle = action.newComment
      return state
    case LIKE:
      pickedReview = state.data.find((review) => review.productId === action.id)
      pickedReview.like++
      return state
    case RE_COMMENT:
      pickedReview = state.data.find((review) => review.productId === action.id)
      pickedReview.comments.push(action.reComment)
      return state
    default:
      return state
  }
}

export default review
