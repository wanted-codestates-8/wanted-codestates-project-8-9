import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Ratings.css'

const Ratings = ({ setCountRate }) => {
  const checkedArr = [false, false, false, false, false]
  const [clickState, setClickState] = useState(checkedArr)
  const [state, setState] = useState('')

  const handleClick = (idx) => {
    const arr = checkedArr
    for (let i = 0; i < 5; i++) {
      arr[i] = i <= idx ? true : false
    }
    setClickState(arr)
    setCountRate(idx + 1)
  }

  return (
    <>
      <div
        style={{
          padding: '15px 75px',
          display: 'flex',
        }}
      >
        {checkedArr.map((list, idx) => (
          <section key={idx}>
            <input
              type="checkbox"
              style={{ display: 'none' }}
              value={state || ''}
              onChange={(e) => setState(e.target.value)}
            />
            <div>
              <FaStar
                color={clickState[idx] ? '#fdcb6e' : 'rgba(0,0,0,0.2)'}
                size={50}
                onClick={() => handleClick(idx)}
                style={{
                  padding: '3px',
                  stroke: 'gray',
                  strokeWidth: '5px',
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Ratings
