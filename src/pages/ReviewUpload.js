import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineClose } from 'react-icons/ai'
import Ratings from '../components/Ratings'
import { add } from '../reducers/ReviewReducer'

const ReviewUpload = () => {
  const [imgState, setImgState] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [countRate, setCountRate] = useState(0)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.review)
  const navigator = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const date = new Date()

    dispatch(
      add({
        image: imgState,
        reviewTitle: inputValue,
        rating: countRate,
        like: 0,
        comments: [],
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} 00:00:00`,
        productId: data.data.length,
        userId: 'tempUser',
      })
    )
    navigator('/')
  }

  const handleDelteImg = (idx) => {
    setImgState((array) => [...array])
  }

  const handleImgChange = useCallback((e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImgState((imgState) => [...imgState, reader.result])
      }
    }
  }, [])

  return (
    <>
      <div className="header">
        <div className="goBack">
          <Link to="/" className="link">
            <AiOutlineArrowLeft size={30} />
          </Link>
        </div>
        <div className="title">리뷰 작성하기</div>
        <div className="close">
          <Link to="/" className="link">
            <AiOutlineClose size={30} />
          </Link>
        </div>
      </div>

      <form action="/" className="review-form" onSubmit={handleSubmit}>
        <h3 className="review-title">리뷰 내용</h3>
        <input
          type="text"
          className="review-input"
          placeholder="상품에 대한 리뷰를 써주세요:)"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          value={inputValue}
        ></input>
        <h3 className="review-title">이미지</h3>

        {imgState.length ? (
          <div className="img-wrapper">
            {imgState.map((img, idx) => (
              <div key={idx} className="img-item">
                <img src={img} className="img-item-file" alt={idx}></img>
                <div
                  className="img-item-delete"
                  onClick={() => handleDelteImg(idx)}
                >
                  -
                </div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}

        <label htmlFor="inputFile" className="review-file-label">
          + 이미지 추가
        </label>
        <input
          id="inputFile"
          type="file"
          className="review-file"
          onChange={handleImgChange}
        ></input>

        <h3 className="review-title">별점</h3>
        <Ratings setCountRate={setCountRate}></Ratings>
        <button className="review-submit">저장하기</button>
      </form>
    </>
  )
}

export default ReviewUpload
