import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ReviewUpload from './pages/ReviewUpload'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/review/upload" className="toReviewBtn">
          리뷰 쓰기
        </Link>
        <Routes>
          <Route path="/review/upload" exact element={<ReviewUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
