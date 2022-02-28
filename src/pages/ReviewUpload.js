import { useCallback, useState } from 'react'

const ReviewUpload = () => {
  const [imgState, setImgState] = useState([])
  const handleDelteImg = (idx) => {
    const array = imgState.splice(idx, 1)
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
  console.log(imgState)
  return (
    <form className="review-form">
      <h3 className="review-title">리뷰 내용</h3>
      <input
        type="text"
        className="review-input"
        placeholder="상품에 대한 리뷰를 써주세요:)"
      ></input>
      <h3 className="review-title">이미지</h3>

      {imgState.length ? (
        <div className="img-wrapper">
          {imgState.map((img, idx) => (
            <div key={idx} className="img-item">
              <img src={img} className="img-item-file"></img>
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
    </form>
  )
}
export default ReviewUpload
