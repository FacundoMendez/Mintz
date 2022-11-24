import React, { useEffect, useState } from 'react'
import Preload from '../../preload/Preload'
import "./conctacSection.css"
import gsap from 'gsap'
import lightBlack from "../../assets/lightBlack.png"
import lightWhite from "../../assets/lightWhite.png"


const ConctactSection = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      duration: 1
    })


    tl.from(".title_Section_contact",{
      scale:1.4,
      opacity: -1,
      rotate: 360
    })

    tl.to(".title_Section_contact",{
      delay: .3,
      letterSpacing: "3px",
      yPercent: -40
    })

    tl.to(".hr_service",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_contact_section",{
      scale:1.4,
      opacity: -1,
    })
    tl.to(".sendContact",{
      opacity: 1,
    })

    
  },[])

  const [ activeColor , setActiveColor ] = useState(false)

  const handlerColor = () => {
    setActiveColor(!activeColor)
  }
  
  return (
    <div  className={activeColor ? "Section_active" : "Section"}>
        <Preload/>
        <div className="container_contact">
          <div className="title_Section_contact">
              <h1 className='Title_s'>Contact</h1>
              <hr  className={activeColor ? "hr_active_service" : "hr_service"}/>
          </div>

          <form className="box_contact_section">
            <input type="text" required placeholder='Name' />
            <input type="email" required placeholder='Email' />
            <textarea className='pp' required name="textArea_contact" id="textArea_contact" cols="30" rows="10" placeholder='Messaje'></textarea>
          
            <button className={activeColor ? "sendContact_active" : "sendContact"} type='submit'>
                Send
            </button>
          
          </form>

        </div>
        
        <div className="buttonColor" onClick={() => handlerColor() }>
          {activeColor ? 
            <img src={lightBlack} alt="lightBlack" />
            :
            <img src={lightWhite} alt="lightWhite" />
          }
        </div>
    </div>
  )
}

export default ConctactSection