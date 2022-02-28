import React from 'react'
import './css/index.css'

import Social from './Social'
import Contents from './Contents'
import Comment from './Comment'

function Index() {
  return (
    <div className="detailContainer">
      <Social />
      <Contents />
      <Comment />
    </div>
  )
}

export default Index
