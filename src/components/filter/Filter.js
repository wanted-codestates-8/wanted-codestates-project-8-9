import React from 'react'
import { Link } from 'react-router-dom'

import './Filter.css'
export default function Filter({ setSort }) {
  const filterTag = [
    { id: 'new', value: '최신순' },
    { id: 'comments', value: '리뷰카운트순' },
    { id: 'random', value: '랜덤 정렬' },
  ]

  return (
    <div className="filter_wrap">
      <div className="filter_item_wrap">
        {filterTag.map((v) => (
          <div className="filter_item" key={v.id} onClick={() => setSort(v.id)}>
            <button className="filter_name">{v.value}</button>
          </div>
        ))}
      </div>
      <Link to="/review/upload">
        <button className="add_btn">+</button>
      </Link>
    </div>
  )
}
