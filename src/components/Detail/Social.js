import React, { useState } from 'react'
import './css/Social.css'
import { MdThumbUpAlt, MdThumbUpOffAlt } from 'react-icons/md'
import { AiOutlineShareAlt, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function Social({ handleModalState }) {
  return (
    <div className="social-container">
      <div className="like">
        <MdThumbUpOffAlt />
        <span>3</span>
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
