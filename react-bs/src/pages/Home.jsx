import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
// import CubeSlider from '../components/CubeSlider';

const Home = () => {
  return (
    <>
       <NavBar/>
       <Banner/>
       <AboutUs/>
       {/* <CubeSlider/> */}
    </>
  )
}

export default Home