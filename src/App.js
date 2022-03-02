import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ReviewUpload from './pages/ReviewUpload'
import Detail from './components/Detail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/review/upload" exact element={<ReviewUpload />} />
          <Route path="/detail/:productId" exact element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
