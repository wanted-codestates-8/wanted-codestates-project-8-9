import React, { useState, useEffect } from 'react'
import './css/Comment.css'

function Comment() {
  const [commentList, setCommentList] = useState([])
  const [commentInput, setCommentInput] = useState('')

  function handleSubmitBtn() {
    //todo redux dispatch로 코멘트 업데이트
  }

  function handleRecomment() {
    //todo redux dispatch로 리코멘트 업데이트
  }

  const testComments = [
    {
      userId: 'fac12351',
      content:
        '와 정말 멋진 상품이네요! 저도 당장 가서 사고싶습니다 잇아이템이라고 생각합니다!',
      date: '30주',
      recomment: [
        { userId: 'dac1774a', content: '저도 그렇게 생각합니다', date: '20주' },
        { userId: 'dac1774a', content: '저도 그렇게 생각합니다', date: '20주' },
      ],
    },

    {
      userId: 'fac12351',
      content:
        '와 정말 멋진 상품이네요! 저도 당장 가서 사고싶습니다 잇아이템이라고 생각합니다!',
      date: '30주',
      recomment: [
        { userId: 'dac1774a', content: '저도 그렇게 생각합니다', date: '20주' },
      ],
    },
  ]

  return (
    <div className="comment-container">
      <ul className="comment-list">
        {testComments.length &&
          testComments.map(({ userId, content, date, recomment }) => (
            <li key={userId} className="comment-item">
              <div className="writer">{userId}</div>
              <div className="content">{content}</div>
              <div className="date-recomment">
                <span className="date">{date}</span>
                <button className="recomment-btn" onClick={handleRecomment}>
                  답글달기
                </button>
              </div>

              {recomment.length && (
                <ul className="recomment-list">
                  {recomment.map((each) => (
                    <li key={each.userId} className="comment-item">
                      <div className="writer">
                        <span className="recomment-writer">{each.userId}</span>
                        <span className="comment-writer">@{userId}</span>
                      </div>
                      <div className="content">{each.content}</div>
                      <div className="date-recomment">
                        <span className="date">{each.date}</span>
                        <button
                          className="recomment-btn"
                          onClick={handleRecomment}
                        >
                          답글달기
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>

      <div className="comment-input">
        <input
          type="text"
          placeholder="댓글을 작성해 주세요"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button className="btn submit" onClick={handleSubmitBtn}>
          게시
        </button>
      </div>
    </div>
  )
}

export default Comment
