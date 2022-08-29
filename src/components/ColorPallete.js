import React, { useState } from 'react'
import "./ColorPallete.css"




function ColorPallete() {
  const mokes = [{
    image: "/images/moke_custom/black.png" 
},{
    image: "/images/moke_custom/blue.png"
},{
    image: "/images/moke_custom/pink.png"
},{
    image: "/images/moke_custom/orange.png"
}];

    const colors = [
        "#9253a1",
        "#f063a4",
        "black",
        "purple",
        "white",
        "orange"
    ]
    
    const [background, setBackground] = useState("#071415")
    const [current, setCurrent] = useState(null)
    
  return (
    <div className='App'style={{background: background}}>
        {current !== null && <h1>Copied{current}</h1>}
        <div className="container">
               {colors.map((color, index) => (
                <div key={index} className="card">
                    <div style={{
                      background: color, 
                    }}      className="box" onClick={() => setBackground(color)}>

                    </div>
                </div>
               ))} 

        </div>
    
    </div>
  )
}

export default ColorPallete