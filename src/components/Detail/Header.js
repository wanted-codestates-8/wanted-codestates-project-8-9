import React from 'react'
import './css/Header.css'
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'

export default function Header() {
  return (
    <div className="header">
      <div className="goBack">
        <AiOutlineArrowLeft size={30} />
      </div>
      <div className="title">리뷰 상세보기</div>
      <div className="close">
        <AiOutlineClose size={30} />
      </div>
    </div>
  )
}
