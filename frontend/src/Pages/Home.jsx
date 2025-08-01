import React from 'react'

import Profile from '../components/profile/Profile';
import Navigationbar from '../components/navbar/Navigationbar';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import './home.css';

const Home = () => {


  return (
    <>
    <Navigationbar/>
    <Profile/>
    <Services/>
    <Footer/>
    </>
  )
}

export default Home