import { useState, useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Detail from './Detail'
import styles from './ReviewList.module.css'

const ReviewList = ({ sort }) => {
  const store = useRef([...useSelector((state) => state.review.data)])
  const last = useRef(15)
  const [data, setData] = useState(store.current.slice(0, last.current))
  const [items, setItems] = useState([])
  const [viewType, setViewType] = useState('grid')
  const sortFunc = useMemo(
    () => ({
      new: (a, b) => {
        return Date.parse(b.date) - Date.parse(a.date)
      },
      comments: (a, b) => {
        return (
          b.comments.length - a.comments.length ||
          Date.parse(b.date) - Date.parse(a.date)
        )
      },
      random: (a, b) => Math.random() - 0.5,
    }),
    []
  )

  // initialize list with grid view
  useEffect(() => {
    setItems(
      store.current.slice(0, last.current).map((v, i) => (
        <div id={v.productId} className={styles.contentsItem} key={v.productId}>
          <img src={v.image[0]} alt={v.productId} />
        </div>
      ))
    )
  }, [])

  // initialize observer
  const observer = useRef()
  const [target, setTarget] = useState('init')
  const update = (entries) => {
    if (entries[0].intersectionRatio === 0) return
    observer.current.disconnect()
    setTarget(entries[0].target.id)
  }
  useEffect(() => {
    observer.current = new IntersectionObserver(update, {
      root: document.querySelector('.App'),
      threshold: 0.5,
    })
  }, [])

  // load more data when observe target has changed
  useEffect(() => {
    if (target === 'init') return
    if (last.current >= store.current.length) return
    last.current += 15
    setData(store.current.slice(0, last.current))
  }, [target])

  // observe last list item when items updated
  useEffect(() => {
    if (items.length === 0) return
    const wrapper = document.getElementById('contents-list')
    observer.current.observe(wrapper.lastChild)
  }, [items])

  // reset to initial state when sort changed
  useEffect(() => {
    observer.current.disconnect()
    last.current = 15
    store.current.sort(sortFunc[sort])
    setData(store.current.slice(0, last.current))
  }, [sort, sortFunc])

  // update items when data or view type changed
  useEffect(() => {
    if (viewType === 'grid') {
      setItems(
        data.map((v, i) => (
          <div
            id={v.productId}
            className={styles.contentsItem}
            key={v.productId}
          >
            <Link to={`/detail/${v.productId}`}>
              <img src={v.image[0]} alt={v.productId} />
            </Link>
          </div>
        ))
      )
    } else {
      setItems(data.map((v, i) => <Detail productId={v.productId} />))
    }
  }, [data, viewType])

  const handleTabClick = (e) => setViewType(e.currentTarget.dataset.viewType)

  return (
    <>
      <section className={styles.typeSelector}>
        <div
          className={`${styles.type} ${viewType === 'grid' ? styles.on : ''}`}
          data-view-type="grid"
          onClick={handleTabClick}
        >
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png"
            alt="grid view"
          />
        </div>
        <div
          className={`${styles.type} ${viewType === 'list' ? styles.on : ''}`}
          data-view-type="list"
          onClick={handleTabClick}
        >
          <img
            src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png"
            alt="list view"
          />
        </div>
      </section>
      <section
        id="contents-list"
        className={`${styles.contentsList} ${styles[viewType]}`}
      >
        {items}
      </section>
    </>
  )
}

export default ReviewList
