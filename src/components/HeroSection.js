import React from 'react'
import "../App.css"
import { Button } from './Button';
import "./HeroSection.css"
// import Shop from './pages/Shop';
import { Link } from 'react-router-dom';




function HeroSection() {
  return (
    <>
   
    <div className='hero-container'>
     

      <img src="/images/1.1.png" alt="bug" width={500} to="/" className='responsive-car'/>
 
      <div className="top-left">
        <h4>TAKE IT FOR A SPIN!</h4>
        <h2 className='360moke'>#360 MOKE</h2>
        </div>

      <div className='hero-btns'>

        
        </div>
      </div>
      <div className='split'>
          <h1><strong>CUSTOMIZE YOUR MOKE TODAY!</strong></h1>
          <Link to="/shop"><div className='redButton'>BUILD YOURS</div>
          </Link>
      </div>
      
      <div className="image-militar-container">
      <img src="/images/2.png" alt="militar" className='responsive'></img>
     
      <div className="botton-left">CUSTOMIZE</div>
      {/* <Route path="/shop" exact component={Shop}/> */}
      
      </div>
      <img src="/images/3.png" alt="rainbow" className='responsive'></img>
      <img src="/images/4.png" alt="rainbow" className="responsive"></img>
      <img src="/images/5.png" alt="rainbow" className="responsive"></img>
      <div className="videoWrapper">
      <video src='/videos/ma.mp4' width="100%"autoPlay loop muted controls/>
      </div>
    
     
    </>
  );
}

export default HeroSection