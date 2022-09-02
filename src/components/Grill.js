import React from 'react'
import { ColorsData } from './BodyColors'

import afterClick from './ColorPallete'

function Grill() {
    const body= "body"
  return (
<div>
    <div className="border">
      <div className='container-title'>
          <h1>GRILL COLOR</h1>
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

      </div>}
  </div>
  )
}

export default Grill