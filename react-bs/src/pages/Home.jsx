import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Service from '../components/Service';

const Home = () => {
  return (
    <>
       <NavBar/>
       <Banner/>
       <AboutUs/>
       <Service />
    </>
  )
}

export default Home