import React, { useState, useEffect } from 'react'
import './css/Comment.css'

function Comment() {
  const [commentList, setCommentList] = useState([])
  const [commentInput, setCommentInput] = useState('')

  return (
    <div className="comment-container">
      <div className="comment-input">
        <input type="text" placeholder="댓글을 작성해 주세요" />
        <button className="btn submit">게시</button>
      </div>
    </div>
  )
}

export default Comment
