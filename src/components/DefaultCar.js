import React from 'react'
import "./ColorPallete.css"

function DefaultCar(props) {
  return (
    <> 
    <div className="default-car-container">        
        <img className="image2" src="./images/moke pics/body/b-base.png" width={"300px"}alt ="equis"/>
        <img className="image2" src={`./images/moke pics/body/b-${props.cuerpo}.png`} width={"300px"} alt ="equis"/>
        <img className="image2" src="./images/moke pics/grill/g-black.png" width={"300px"} alt ="equis"/>
        <img className="image2" src="./images/moke pics/roll/r-black.png" width={"300px"}alt ="equis"/>
        <img className="image2" src="./images/moke pics/seat/s-test.png" width={"300px"}alt ="equis"/>
        <img className="image2" src="./images/moke pics/wheel/w-black.png" width={"300px"}alt ="equis"/>
        <img className="image2" src="./images/moke pics/bumper/p-black.png" width={"300px"}alt ="equis"/>
       
    </div>

    </>
  )
}

export default DefaultCar