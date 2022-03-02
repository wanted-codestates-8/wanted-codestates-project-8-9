import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ReviewUpload from './pages/ReviewUpload'
import Header from './components/header/Header'
import Filter from './components/filter/Filter'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <BrowserRouter>
        <Link to="/review/upload" className="toReviewBtn">
          리뷰 쓰기
        </Link>
        <Link to="/detail/id" className="toDetailBtn">
          상세보기
        </Link>
        <Routes>
          <Route path="/review/upload" exact element={<ReviewUpload />} />
          <Route path="/detail/id" exact element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
