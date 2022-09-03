import React, { useState } from 'react'
import { ColorsData } from './BodyColors';
import "./ColorPallete.css"
import DefaultCar from './DefaultCar';
import Grill from './Grill';


export const grill = "grill"

function ColorPallete() {

  const bodyColor = "" 

    const afterClick = (e) =>{
    
      // console.log(e.target.id) 
      // bodyColor = e.target.id;
    setBody(e.target.id)
       
          
    }
      // console.log(bodyColor)

    const [body, setBody] = useState("Black")

          //  console.log(body)
    const [show, setShow] = useState(true)
    
  return (
  <>

  <div className="container">

      <div className="container-image">
      <> 
    <div className="default-car-container">        
        <img className="image2" src="./images/moke pics/body/b-base.png" width={"300px"}/>
        <img className="image2" src={`./images/moke pics/body/b-${body}.png`} width={"300px"}/>
        <img className="image2" src="./images/moke pics/grill/g-black.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/roll/r-black.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/seat/s-test.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/wheel/w-black.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/bumper/p-black.png" width={"300px"}/>
       
    </div>

    </>
          {/* <DefaultCar body={body}/> */}
      </div>
      {show? 
      <div className="border">
      <div className='container-title'>
          <h1>BODY COLOR</h1>
      </div>
       
      <div className="container-moke">

      {ColorsData.map((color,background) =>{
            return(
              <div className="card-moke">
                <div className="box-moke"
                  key={color.color+body}
                  id={color.color} 
                 
                  onClick={afterClick}
                  style={{background : color.background}}>
                </div>
            <p>{color.color}</p>
          </div>  
                
                )
              })}
        </div>

      </div>:<Grill/>}
  </div>

  <div className="pagination-container">
            <a href="#" class="previous" onClick={() => 
              setShow(true)}>&laquo; Previous</a>


            <a href="#" class="next" onClick={() => setShow(false)}>Next &raquo;</a>
        </div>
    </>
  )
}

export default ColorPallete