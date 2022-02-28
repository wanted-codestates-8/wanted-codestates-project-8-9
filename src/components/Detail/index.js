import React from 'react'
import './css/index.css'
import Header from './Header'
import ProductInfo from './ProductInfo'
import Image from './Image'
import Social from './Social'
import Contents from './Contents'
import Comment from './Comment'
import Slick from './Slick'

export default function Index() {
  return (
    <div className="detailContainer">
      <Header />
      <ProductInfo />
      {/* <Image /> */}
      <Slick />
      <Social />
      <Contents />
      <Comment />
    </div>
  )
}
