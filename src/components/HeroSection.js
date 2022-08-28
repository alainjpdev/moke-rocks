import React from 'react'
import "../App.css"
import { Button } from './Button';
import "./HeroSection.css"
import ContinuousSlider from './Slide';



function HeroSection() {
  return (
    <>
      <div className='hero-container'>
     
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <h1 >ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <img src="/images/1.1.png" alt="bug" width={500} to="/" className='responsive-car'/>
      {/* <ContinuousSlider/> */}
      <div className="top-left">
        <h4>TAKE IT FOR A SPIN!</h4>
        <h2 className='360moke'>#360 MOKE</h2>
        </div>

      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
        
        </div>
      </div>
      <div className='split'>
      <h1>CUSTOMIZE YOUR MOKE TODAY!</h1>
      </div>
      <img src="/images/2.png" alt="militar" className="responsive"></img>
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