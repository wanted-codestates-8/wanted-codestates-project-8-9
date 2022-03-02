import React, { useState } from 'react'
import './css/Social.css'
import { MdThumbUpAlt, MdThumbUpOffAlt } from 'react-icons/md'
import { AiOutlineShareAlt, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { like } from '../../reducers/ReviewReducer'

function Social({ handleModalState }) {
  const [likeClick, setLikeClick] = useState(false)
  const { productId } = useParams()
  const dispatch = useDispatch()
  const reviews = useSelector((state) => state.review.data)
  const pickedReview = reviews.find(
    (review) => review.productId === Number(productId)
  )

  function handleLike() {
    if (likeClick) {
      alert('이미 좋아요를 누르셨습니다')
      return
    }

    setLikeClick(true)
    // todo redux 비동기작업

    dispatch(like(Number(productId)))
  }

  return (
    <div className="social-container">
      <div className="like" onClick={handleLike}>
        {likeClick ? <MdThumbUpAlt /> : <MdThumbUpOffAlt />}
        <span>{pickedReview?.like}</span>
      </div>

      <div className="share" onClick={handleModalState}>
        <AiOutlineShareAlt className="share" />
      </div>

      <div className="heart">
        <AiOutlineHeart />
      </div>
    </div>
  )
}

export default Social
