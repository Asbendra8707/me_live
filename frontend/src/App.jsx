import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Auth from './components/loginpages/Register'
import LoginUser from './Pages/LoginUser'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
            <Route path="/loginuser" element={<LoginUser/>}></Route>
            <Route path="/register" element={<Auth/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
