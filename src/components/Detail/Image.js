import React from 'react'
import './css/Image.css'

export default function Image() {
  return (
    <div className="productImage">
      <img
        alt="product_test"
        src={process.env.PUBLIC_URL + '/BallantestImg.webp'}
      />
    </div>
  )
}
