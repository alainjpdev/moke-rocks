import "../../App.css"
import HeroSection from "../HeroSection"

import React from 'react'
import Cards from "../Cards"
import { BrowserRouter } from "react-router-dom"


function Home() {
  return (
    <BrowserRouter>
         <HeroSection/>
         <Cards/>
        
    </BrowserRouter>
  )
}

export default Home