import React from 'react'
import './css/Contents.css'
import { AiFillStar } from 'react-icons/ai'

function Contents() {
  return (
    <div className="contents-container">
      <div className="star">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>

      <p className="contents-title">
        해외 배송치고 빠른배송이고 상품은 카드나 차키정도는 거뜬히 넣고
        다니겠네요
      </p>
    </div>
  )
}

export default Contents
