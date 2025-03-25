import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Service from '../components/Service';
import Project from '../components/Project';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
const Home = () => {
  return (
    <>
       <NavBar/>
       <Banner/>
       <AboutUs/>
       <Service />
       <Project/>
       <Blog/>
       <Contact/>
    </>
  )
}

export default Home