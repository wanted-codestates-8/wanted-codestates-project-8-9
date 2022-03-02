import React from 'react'
import './css/Contents.css'
import { AiFillStar } from 'react-icons/ai'

function Contents({ pickedReview }) {
  return (
    <div className="contents-container">
      <div className="star">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>

      <p className="contents-title">{pickedReview.reviewTitle}</p>
    </div>
  )
}

export default Contents
