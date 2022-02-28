import React from 'react'
import './css/index.css'
import Header from './Header'
import ProductInfo from './ProductInfo'
import Image from './Image'

export default function Index() {
  return (
    <div className="detailContainer">
      <Header />
      <ProductInfo />
      <Image />
    </div>
  )
}
