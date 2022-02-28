import { useCallback, useState } from 'react'

const ReviewUpload = () => {
  const [imgState, setImgState] = useState('')
  const handleImgChange = useCallback((e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImgState(reader.result)
      }
    }
  }, [])
  return (
    <form>
      <h3>리뷰 내용</h3>
      <input type="text"></input>
      <h3>이미지</h3>
      <input type="file" onChange={handleImgChange}></input>
      <img src={imgState}></img>
      <h3>별점</h3>
    </form>
  )
}
export default ReviewUpload
