import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Auth from './components/loginpages/Register'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AuthPage from './components/loginpages/AuthPage'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // allow re-animation when scrolling back
      mirror: true // optional: animate when scrolling up
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>} ></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
            <Route path="/sign" element={<AuthPage/>}></Route>
            <Route path="/register" element={<Auth/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
