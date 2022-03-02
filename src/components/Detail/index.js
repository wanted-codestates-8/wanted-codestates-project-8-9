import React, { useState } from 'react'
import './css/index.css'
import Header from './Header'
import ProductInfo from './ProductInfo'
import Image from './Image'
import Social from './Social'
import Contents from './Contents'
import Comment from './Comment'
import Slick from './Slick'
import ShareModal from './ShareModal'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function Index() {
  // dealing with share modal
  const [modalOpenState, setModalOpenState] = useState(false)
  function handleModalState() {
    setModalOpenState((prev) => !prev)
  }

  // const param = useLocation()

  return (
    <div className="detailContainer">
      <Header />
      <ProductInfo />
      <Slick />

      <Social handleModalState={handleModalState} />
      <Contents />
      <Comment />

      {/* ShareModal */}
      {modalOpenState && <ShareModal handleModalState={handleModalState} />}
    </div>
  )
}
