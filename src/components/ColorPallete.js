import React, { useState } from 'react'
import { ColorsData } from './BodyColors';
import "./ColorPallete.css"
import DefaultCar from './DefaultCar';
import Grill from './Grill';


export const grill = "grill"

function ColorPallete() {

  const parts = ["body", "grill", "rollbar"];
  const [myPart, setMyPart] = useState("")

  const bodyColor = "" 
  
  const whatShow = ()=>{
    setShow(false)
  } 

    const afterClickBody = (e) =>{
    setBody(e.target.id)
     
    }

    const afterClickGrill = (e) =>{
      
      setGrill(e.target.id)
          
      }
    const afterClickRollbar = (e) =>{
   
        setRollbar(e.target.id)          
        }


    const [body, setBody] = useState("blue")

    const [grill, setGrill] = useState("Black")

    const [ rollbar, setRollbar] = useState("Black")
 
    const [show, setShow] = useState(true)
    
  return (
  <>

  <div className="container">

      <div className="container-image">
      <> 
    <div className="default-car-container">        
        <img className="image2" src="./images/moke pics/body/b-base.png" width={"300px"}/>
        <img className="image2" src={`./images/moke pics/grill/g-${grill}.png`} width={"300px"}/>
        <img className="image2" src={`./images/moke pics/body/b-${body}.png`} width={"300px"}/>
        <img className="image2" src={`./images/moke pics/roll/r-${rollbar}.png`} width={"300px"}/>
        <img className="image2" src="./images/moke pics/seat/s-test.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/wheel/w-black.png" width={"300px"}/>
        <img className="image2" src="./images/moke pics/bumper/p-black.png" width={"300px"}/>
       
    </div>

    </>
          {/* <DefaultCar body={body}/> */}
      </div>
      
      <div className="border">
      
        <div className='container-title'>
        
                    <h2>Select a part of your MOKE</h2>
                    <br />
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        {parts.map(part => (
                            <button
                                type="button"
                                key={part}
                                className={"btn btn-light border-dark "}
                                onClick={() => setMyPart(part)}
                            >
                                {part.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="col text-center">
                    <p>{myPart.toUpperCase()}</p>

                    <div>
                        {myPart === "body" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+body}
                                        id={color.color} 
                                       
                                        onClick={afterClickBody}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        {myPart === "grill" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+body}
                                        id={color.color} 
                                       
                                        onClick={afterClickGrill}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        {myPart === "rollbar" && (
                            <div className="container-moke">
                            {ColorsData.map((color,background) =>{
                                  return(
                                    <div className="card-moke">
                                      <div className="box-moke"
                                        key={color.color+body}
                                        id={color.color} 
                                       
                                        onClick={afterClickRollbar}
                                        style={{background : color.background}}>
                                      </div>
                                  <p>{color.color}</p>
                                </div>  
                                      
                                      )
                                    })}
                              </div> 
                        )}
                        
                    </div>
                </div>
            </div>
    
       
      
        

     
  </div>
    </>
  )
  
}

export default ColorPallete