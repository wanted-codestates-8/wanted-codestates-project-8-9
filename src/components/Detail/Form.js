import React from 'react'
import './css/Comment.css'

function Form({ value, onChange, onClick, index = -1, userId = '' }) {
  return (
    <form className="comment-input" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="tempUser (으)로 답글 달기"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="btn submit"
        onClick={() => onClick(index, userId)}
      >
        게시
      </button>
    </form>
  )
}

export default Form
