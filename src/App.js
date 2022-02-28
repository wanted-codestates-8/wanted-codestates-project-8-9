
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ReviewUpload from './pages/ReviewUpload'
import Header from './components/header/Header'
import Filter from './components/filter/Filter'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
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
