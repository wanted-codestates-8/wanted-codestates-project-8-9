import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { comment, recomment } from '../../reducers/ReviewReducer'
import './css/Comment.css'
import Form from './Form'

function Comment({ pickedReview }) {
  const [commentInput, setCommentInput] = useState('')
  const [recommentIndex, setRecommentIndex] = useState({
    parent: -1,
    self: -1,
  })

  const dispatch = useDispatch()

  function handleSubmitBtn() {
    //todo redux dispatch로 코멘트 업데이트
    if (commentInput.trim() === '') {
      alert('댓글을 작성해주세요')
      return
    }

    const newComment = {
      userId: 'tempUser',
      content: commentInput,
      date: '방금 전',
      recomment: [],
    }

    dispatch(comment({ productId: pickedReview.productId, newComment }))
    setCommentInput('')
    setRecommentIndex({
      self: -1,
      parent: -1,
    })
  }

  function handleSubmitRecomment(idx, userId) {
    if (commentInput.trim() === '') {
      alert('대댓글을 작성해주세요')
      return
    }

    const newRecomment = {
      userId,
      content: commentInput,
      date: '방금 전',
    }

    dispatch(
      recomment({
        productId: pickedReview.productId,
        idx,
        recomment: newRecomment,
      })
    )
    setRecommentIndex({
      self: -1,
      parent: -1,
    })
    setCommentInput('')
  }

  function handleCancel() {
    setRecommentIndex({
      self: -1,
      parent: -1,
    })
  }

  function handleRecomment(idx) {
    setRecommentIndex({
      self: -1,
      parent: idx,
    })
  }

  function handleRerecomment(pIdx, idx) {
    setRecommentIndex({
      parent: pIdx,
      self: idx,
    })
  }

  return (
    <div className="comment-container">
      <ul className="comment-list">
        {/* 댓글 */}
        {pickedReview.comments.length > 0 &&
          pickedReview.comments.map(
            ({ userId, content, date, recomment }, index) => (
              <li key={index} className="comment-item">
                <div className="writer">{userId}</div>
                <div className="content">{content}</div>
                <div className="date-recomment">
                  <span className="date">{date}</span>
                  {recommentIndex.parent === index &&
                  recommentIndex.self === -1 ? (
                    <button className="recomment-btn" onClick={handleCancel}>
                      답글 취소
                    </button>
                  ) : (
                    <button
                      className="recomment-btn"
                      onClick={() => handleRecomment(index, userId)}
                    >
                      답글 달기
                    </button>
                  )}
                </div>
                {recommentIndex.parent === index &&
                  recommentIndex.self === -1 && (
                    <Form
                      value={commentInput}
                      onChange={setCommentInput}
                      onClick={handleSubmitRecomment}
                      params={{ index, userId }}
                    />
                  )}

                {/* 대댓글 */}
                {recomment && recomment.length > 0 && (
                  <ul className="recomment-list">
                    {recomment.map((each, idx) => (
                      <React.Fragment key={idx}>
                        <li className="comment-item">
                          <div className="writer">
                            <span className="recomment-writer">
                              {'tempUser'}
                            </span>
                            <span className="comment-writer">
                              @{each.userId}
                            </span>
                          </div>
                          <div className="content">{each.content}</div>
                          <div className="date-recomment">
                            <span className="date">{each.date}</span>
                            {recommentIndex.parent === index &&
                            recommentIndex.self === idx ? (
                              <button
                                className="recomment-btn"
                                onClick={handleCancel}
                              >
                                답글 취소
                              </button>
                            ) : (
                              <button
                                className="recomment-btn"
                                onClick={() => handleRerecomment(index, idx)}
                              >
                                답글 달기
                              </button>
                            )}
                          </div>
                        </li>
                        {recommentIndex.parent === index &&
                          recommentIndex.self === idx && (
                            <Form
                              value={commentInput}
                              onChange={setCommentInput}
                              onClick={handleSubmitRecomment}
                              params={{ index, userId }}
                            />
                          )}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
      </ul>

      {recommentIndex.parent === -1 && recommentIndex.self === -1 && (
        <Form
          value={commentInput}
          onChange={setCommentInput}
          onClick={handleSubmitBtn}
        />
      )}
    </div>
  )
}

export default Comment
