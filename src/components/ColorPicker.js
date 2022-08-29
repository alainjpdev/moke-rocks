import React from 'react'
import { MokesData } from './MokesData'
import { useState } from 'react'
import "./ColorPicker.css"

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

function ColorPicker({images}) {
    
    const [current, setCurrent] = useState(0)
    const length = images.length;

    if(!Array.isArray(images)|| images.length <= 0) {
        return null
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

  return (
    <section className='section-images'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {MokesData.map((image,index) =>{
            return(
                
                <div
                    className={ index === current ? "slide active" : "slide"}key={index}>
                        {index === current && (<img src={image.image} alt="loquesea"className='image'/>)}
                    
                </div>
            )
        })}
        {/* <div>ColorPicker</div> */}
    </section>

  )
}

export default ColorPicker