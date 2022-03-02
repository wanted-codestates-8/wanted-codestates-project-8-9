import { useState } from 'react'
import Header from '../components/header/Header'
import Filter from '../components/filter/Filter'
import ReviewList from '../components/ReviewList'

const Main = () => {
  const [sort, setSort] = useState('new')

  return (
    <>
      <Header />
      <Filter setSort={setSort} />
      <ReviewList sort={sort} />
    </>
  )
}

export default Main
