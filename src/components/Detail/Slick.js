import React from 'react'
import Slider from 'react-slick'
import './css/Slider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slick({ pickedReview }) {
  const Settings = {
    dots: true,
    arrow: false,
    infinite: false,
    slidesToShow: 1,
    SlidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ padding: '50px 0' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  }

  return (
    <div>
      <Slider {...Settings}>
        {pickedReview.image.map((image, idx) => (
          <div className="productImage" key={idx}>
            <img alt="image_test" src={`${image}`} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
