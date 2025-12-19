import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/home'
import Createuser from './pages/createuser'
import Edituserdetail from './pages/edituserdetail'
import View from './pages/view'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <BrowserRouter>
     <Header> </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={< Createuser/>} />
        <Route path="/view" element={< View/>} />
        <Route path="/edituserdetail" element={< Edituserdetail/>} />
       
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
