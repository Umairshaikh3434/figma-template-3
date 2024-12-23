import React from 'react'
import Navbar from '../components/Header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import DontMiss from "../components/DONTMISS";
import Essential from "../components/ESSENTIAL";
import Featured from "../components/FEATURED";
import GearUp from "../components/GEARUP";
import Navigation from "../components/Navigation";
import { CarouselSize } from "../components/BEST"



export default function page () {
  return(
    <main>
      <Navbar/>
      <Hero/>
      
      <CarouselSize/>
      <DontMiss/>
      <Essential/>
      <Navigation/>
      <GearUp/>
      <Featured/>
    </main>
  )
}