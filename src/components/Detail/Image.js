import React, { useRef, useState } from 'react'
import './css/Image.css'

export default function Image() {
  const images = {
    image: [
      'https://i.balaan.io/review/f5c2ecb653c723f30ffe13b100da92ad.webp',
      'https://i.balaan.io/review/0fd2b4020ba0234c43e87c7b1620e22b.webp',
    ],
  }

  const scrollRef = useRef(null)
  const [isDrag, setIsDrag] = useState(false)
  const [startX, setStartX] = useState()

  const onDragStart = (e) => {
    e.preventDefault()
    setIsDrag(true)
    setStartX(e.pageX + scrollRef.current.scrollLeft)
  }

  const onDragEnd = () => {
    setIsDrag(false)
  }

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current

      scrollRef.current.scrollLeft = startX - e.pageX

      if (scrollLeft === 0) {
        setStartX(e.pageX)
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft)
      }
    }
  }

  const throttle = (func, ms) => {
    let throttled = false
    return (...args) => {
      if (!throttled) {
        throttled = true
        setTimeout(() => {
          func(...args)
          throttled = false
        }, ms)
      }
    }
  }

  const delay = 10
  const onThrottleDragMove = throttle(onDragMove, delay)

  return (
    <div className="productImageWapper">
      {images && (
        <div
          className="images"
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {images.image.map((image) => (
            <div className="productImage">
              <img alt="image_test" src={`${image}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
