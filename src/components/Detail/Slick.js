import React from 'react'
import Slider from 'react-slick'
import './css/Slider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slick() {
  const images = {
    image: [
      'https://i.balaan.io/review/f5c2ecb653c723f30ffe13b100da92ad.webp',
      'https://i.balaan.io/review/0fd2b4020ba0234c43e87c7b1620e22b.webp',
    ],
  }

  const Settings = {
    dots: true,
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    SlidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ padding: '50px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  }

  return (
    <Slider {...Settings}>
      {images.image.map((image) => (
        <div className="productImage">
          <img alt="image_test" src={`${image}`} />
        </div>
      ))}
    </Slider>
  )
}
