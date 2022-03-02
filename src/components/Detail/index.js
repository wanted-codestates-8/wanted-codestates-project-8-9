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

  function handleModalState() {
    setModalOpenState((prev) => !prev)
  }

  return (
    <div className="detailContainer">
      <Header />
      <ProductInfo />
      <Slick productId={productId ? productId : productIdParams} />
      <Social
        handleModalState={handleModalState}
        productId={productId ? productId : productIdParams}
      />
      <Contents />
      <Comment productId={productId ? productId : productIdParams} />
      {modalOpenState && <ShareModal handleModalState={handleModalState} />}
    </div>
  )
}
