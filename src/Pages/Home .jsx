import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Trainers from '../Components/Trainers'
import Pricing from '../Components/Pricing'
import Contact from '../Components/contact'
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'
import Program from '../Components/Program'
import BmiCalculator from '../Components/BmiCalculator'
import BlogSection from '../Components/BlogSection'

function Home () {
  return (
    <>
    <Navbar/>
     <section id="home" className="scroll-mt-24"><Hero/></section>
     <section id="about" className="scroll-mt-24"></section><About/>
     <section id="gallery" className="scroll-mt-24"></section><Gallery/>
     <section id="program" className="scroll-mt-24"></section><Program/>
     <section id="trainers" className="scroll-mt-24"></section><Trainers/>
       <section id="bmicalculator" className="scroll-mt-24"></section><BmiCalculator/>
        <section id="blogsection" className="scroll-mt-24"></section><BlogSection/>
     <section id="pricing" className="scroll-mt-24"></section><Pricing/>
     <section id="contact" className="scroll-mt-24"></section><Contact/>
     <Footer/>
    </>
  )
}

export default Home 
