import React, {useState} from 'react'
import { Link } from "react-router-dom"
// import { Button } from "./Button.js"

import "./Navbar.css"
function Navbar() {

  const [click, setClick] = useState(false)

  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)
  
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {

    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/"> <img src="/images/moke-tulum.png" alt="bug" height={80} to="/"/></Link>
     
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        
        </Link>
      
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}/>
        </div>
        <ul  className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/shop" className='nav-links' onClick={closeMobileMenu}>
              SHOP
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/specialeditions" className='nav-links' onClick={closeMobileMenu}>
              SPECIAL EDITIONS
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/aboutus" className='nav-links' onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to="/faq" className='nav-links' onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/specs" className='nav-links' onClick={closeMobileMenu}>
              SPECS
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/news" className='nav-links' onClick={closeMobileMenu}>
              NEWS
            </Link>
          </li>
          {/* { button && <Button buttonStyle="btn--outline">Sign In</Button>} */}
         

        
        </ul>
      </div>
     </nav>
    </>
  )
}

export default Navbar

