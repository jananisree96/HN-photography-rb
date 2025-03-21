import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Service from '../components/Service';
import Project from '../components/Project';
const Home = () => {
  return (
    <>
       <NavBar/>
       <Banner/>
       <AboutUs/>
       <Service />
       <Project/>
    </>
  )
}

export default Home