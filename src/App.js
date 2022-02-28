import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ReviewUpload from './pages/ReviewUpload'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/review/upload" exact element={<ReviewUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
