import React, { useState } from 'react'
import { ColorsData } from './BodyColors';
import "./ColorPallete.css"

const body = "body"

function ColorPallete() {
   

    const afterClick = (e) =>{

      console.log(e.target.id)
      setImages("/images/moke_custom/"+e.target.id+".png")
      
    }

    const [image, setImages] = useState("./images/moke_custom/black-body.png")

    const [show, setShow] = useState(true)
    
  return (<>

  <div className="container">

      <div className="container-image">
        <img src={image} alt="Travel" width={"100%"}/>    
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
                id={color.color+"-"+body}  
                onClick={afterClick}
                style={{background : color.background}}>
              </div>
            <p>{color.color}</p>
          </div>  
                
                )
              })}
        </div>

      </div>:null}
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