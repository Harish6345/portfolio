import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Tools from './Tools'
import Highlights from './Highlights'
import Testnomials from './Testnomials'
import Contact from './Contact.jsx'




const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <Card/>
     <Tools/>
    <Highlights/>
    <Testnomials/>
    <Contact/>
    </div>
  )
}

export default Home