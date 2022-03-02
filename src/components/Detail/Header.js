import React from 'react'
import './css/Header.css'
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="goBack">
        <Link to="/" className="link">
          <AiOutlineArrowLeft size={30} />
        </Link>
      </div>
      <div className="title">리뷰 상세보기</div>
      <div className="close">
        <Link to="/" className="link">
          <AiOutlineClose size={30} />
        </Link>
      </div>
    </div>
  )
}
