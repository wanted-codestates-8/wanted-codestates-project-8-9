import React, { useState, useEffect } from 'react'
import './css/Comment.css'

function Comment() {
  const [commentList, setCommentList] = useState('')
  const [commentInput, setCommentInput] = useState('')

  useEffect(() => {
    //todo 첫 마운트때 데이터베이스에서 coomentList를 가져와 상태로 저장.
  }, [])

  return (
    <div className="comment-container">
      <div className="comment-input">
        <input
          type="text"
          placeholder="로그인 후 댓글 작성이 가능합니다."
          onFocus={() => {
            alert('로그인이 필요합니다!')
            window.location.href = '/'
          }}
        />
        <button className="btn submit">게시</button>
      </div>
    </div>
  )
}

export default Comment
