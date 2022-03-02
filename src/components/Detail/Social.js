import React, { useState } from 'react'
import './css/Social.css'
import { MdThumbUpAlt, MdThumbUpOffAlt } from 'react-icons/md'
import { AiOutlineShareAlt, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { like } from '../../reducers/ReviewReducer'

function Social({ handleModalState, pickedReview }) {
  const [likeClick, setLikeClick] = useState(false)
  const dispatch = useDispatch()

  function handleLike() {
    if (likeClick) {
      alert('이미 좋아요를 누르셨습니다')
      return
    }

    setLikeClick(true)
    dispatch(like(Number(pickedReview.productId)))
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
