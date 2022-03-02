import React, { useState } from 'react'
import './css/index.css'
import Header from './Header'
import ProductInfo from './ProductInfo'
import Social from './Social'
import Contents from './Contents'
import Comment from './Comment'
import Slick from './Slick'
import ShareModal from './ShareModal'

export default function Index() {
  const [modalOpenState, setModalOpenState] = useState(false)
  function handleModalState() {
    setModalOpenState((prev) => !prev)
  }

  return (
    <div className="detailContainer">
      <Header />
      <ProductInfo />
      <Slick />
      <Social handleModalState={handleModalState} />
      <Contents />
      <Comment />
      {modalOpenState && <ShareModal handleModalState={handleModalState} />}
    </div>
  )
}
