import React from 'react';
import ColorPallete from '../ColorPallete';

import "./Shop.css";

export default function Shop() {
  return <>
  <div className="shop-container">
    <div className="section-title">
        <h1 itemprop="name">Build Your eMoke</h1>
    </div>
    <div className="container">
        <div className="canvas-section">
          <ColorPallete/>

            {/* <ColorPicker images={MokesData}/>
            <ColorPallete/> */}
                {/* {console.log(MokesData.image[0])} */}
         
            {/* <img src="../images/moke_custom/black.png" alt="black-moke"className='canvas' /> */}

        </div>
    </div>

  </div>
        
       
        


  
  </>

  
    
  
}
