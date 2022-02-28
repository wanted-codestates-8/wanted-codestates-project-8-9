import { useRef } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { add } from './modules/review'

function App({ data, add }) {
  let count = useRef(0)
  const temp = {
    userId: count.current++,
  }

  return (
    <div className="App">
      <button onClick={() => add(temp)}>Add</button>
      {data &&
        data.length > 0 &&
        data.map((review, index) => <div key={index}>{review.userId}</div>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { data: state.review.data }
}

const mapDispatchToProps = (dispatch) => ({
  add: (newReview) => {
    dispatch(add(newReview))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
