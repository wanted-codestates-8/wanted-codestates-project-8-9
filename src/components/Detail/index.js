import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
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

  const reviews = useSelector((state) => state.review.data)
  const pickedReview = reviews.find((review) => review.productId === Number(id))

  function handleModalState() {
    setModalOpenState((prev) => !prev)
  }

  return (
    <div id={id} className="detailContainer">
      <Header />
      <ProductInfo pickedReview={pickedReview} />
      <Slick pickedReview={pickedReview} />
      <Social handleModalState={handleModalState} pickedReview={pickedReview} />
      <Contents pickedReview={pickedReview} />
      <Comment pickedReview={pickedReview} />
      {modalOpenState && <ShareModal handleModalState={handleModalState} />}
    </div>
  )
}
