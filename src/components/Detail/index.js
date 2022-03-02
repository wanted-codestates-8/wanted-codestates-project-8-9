import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './css/index.css'
import Header from './Header'
import ProductInfo from './ProductInfo'
import Social from './Social'
import Contents from './Contents'
import Comment from './Comment'
import Slick from './Slick'
import ShareModal from './ShareModal'

export default function Index({ productId }) {
  const [modalOpenState, setModalOpenState] = useState(false)
  const productIdParams = useParams().productId
  const id = productId !== undefined ? productId : productIdParams

  function handleModalState() {
    setModalOpenState((prev) => !prev)
  }

  return (
    <div id={id} className="detailContainer">
      <Header />
      <ProductInfo productId={id} />
      <Slick productId={id} />
      <Social handleModalState={handleModalState} productId={id} />
      <Contents />
      <Comment productId={id} />
      {modalOpenState && <ShareModal handleModalState={handleModalState} />}
    </div>
  )
}
