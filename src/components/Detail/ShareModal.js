import React from 'react'
import './css/ShareModal.css'
import { useLocation } from 'react-router-dom'

function ShareModal({ handleModalState }) {
  // const location = useLocation()

  return (
    <div
      className="backdrop"
      onClick={(e) => {
        if (e.target.closest('.share-contentList') === null) {
          handleModalState()
        }
      }}
    >
      <ul className="share-contentList">
        <li
          className="url"
          onClick={(e) => {
            // todo useLocation으로 상세페이지 url 확인 후, 클릭시 해당 내용 클립보드 복사

            navigator.clipboard
              .writeText('yes link3')
              .then(() => alert('링크가 복사되었습니다'))
          }}
        >
          <img
            src="https://static.balaan.co.kr/mobile/img/share/btn_share_url.png"
            alt="url imgage"
          />
        </li>
      </ul>
    </div>
  )
}

export default ShareModal
