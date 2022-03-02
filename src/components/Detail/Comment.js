import React, { useState, useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { comment, recomment } from '../../reducers/ReviewReducer'
import './css/Comment.css'

function Comment() {
  const [commentInput, setCommentInput] = useState('')
  const [recommentIndex, setRecommentIndex] = useState({
    parent: -1,
    self: -1,
  })
  const [recommentInput, setRecommentInput] = useState('')
  let { productId } = useParams()
  productId = Number(productId)
  const dispatch = useDispatch()
  const reviews = useSelector((state) => state.review.data)
  const pickedReview = reviews.find(
    (review) => review.productId === Number(productId)
  )

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

    dispatch(comment({ productId, newComment }))
    setCommentInput('')
    setRecommentIndex({
      self: -1,
      parent: -1,
    })
  }

  function handleSubmitRecomment(idx, userId) {
    if (recommentInput.trim() === '') {
      alert('대댓글을 작성해주세요')
      return
    }

    const newRecomment = {
      userId: userId,
      content: recommentInput,
      date: '방금 전',
    }

    dispatch(recomment({ productId, idx, recomment: newRecomment }))
    setRecommentIndex({
      self: -1,
      parent: -1,
    })
    setRecommentInput('')
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
        {pickedReview.comments.length &&
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
                {recommentIndex.parent === index && recommentIndex.self === -1 && (
                  <form
                    className="comment-input"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="text"
                      placeholder="tempUser (으)로 답글 달기"
                      value={recommentInput}
                      onChange={(e) => setRecommentInput(e.target.value)}
                    />
                    <button
                      className="btn submit"
                      onClick={() => handleSubmitRecomment(index, userId)}
                    >
                      게시
                    </button>
                  </form>
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
                            <form
                              className="comment-input"
                              onSubmit={(e) => e.preventDefault()}
                            >
                              <input
                                type="text"
                                placeholder="tempUser (으)로 답글 달기"
                                value={recommentInput}
                                onChange={(e) =>
                                  setRecommentInput(e.target.value)
                                }
                              />
                              <button
                                className="btn submit"
                                onClick={() =>
                                  handleSubmitRecomment(index, userId)
                                }
                              >
                                게시
                              </button>
                            </form>
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
        <form className="comment-input" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="댓글을 작성해 주세요"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button className="btn submit" onClick={handleSubmitBtn}>
            게시
          </button>
        </form>
      )}
    </div>
  )
}

export default Comment
