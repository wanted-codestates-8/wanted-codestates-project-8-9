import React, { useState } from 'react'

import './Filter.css'
export default function Filter() {
  const filterTag = [
    { id: 'new', value: '최신순' },
    { id: 'like', value: '리뷰카운트순' },
    { id: 'random', value: '랜덤 정렬' },
  ]
  const [propValue, setPropValue] = useState('new')

  const getId = (id) => {
    setPropValue(id)
  }

  return (
    <div className="filter_wrap">
      {filterTag.map((v) => (
        <div className="filter_item" key={v.id} onClick={() => getId(v.id)}>
          <button className="filter_name">{v.value}</button>
        </div>
      ))}
    </div>
  )
}
