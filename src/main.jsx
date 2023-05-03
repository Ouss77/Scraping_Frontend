import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import HotelsList from './components/HotelsList'
import HotelsDetails from './components/HotelsDetails'
import HotelsPrice from './components/HotelsPrice'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path="/hotels/:city/:checkin/:checkout" element={<HotelsList/>}></Route>
  <Route path="/price/:hoteltitle/:checkin/:checkout" element={<HotelsPrice/>}></Route>
    </Routes>
    </BrowserRouter>
)
