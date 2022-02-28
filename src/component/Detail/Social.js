import React, { useState } from 'react'
import './css/Social.css'
import { MdThumbUpAlt, MdThumbUpOffAlt } from 'react-icons/md'
import { AiOutlineShareAlt, AiFillHeart } from 'react-icons/ai'

function Social() {
  return (
    <div className="social-container">
      <div className="like">
        <MdThumbUpAlt />
        <span>3</span>
      </div>

      <div className="share">
        <AiOutlineShareAlt className="share" />
      </div>

      <div className="heart">
        <AiFillHeart />
      </div>
    </div>
  )
}

export default Social
