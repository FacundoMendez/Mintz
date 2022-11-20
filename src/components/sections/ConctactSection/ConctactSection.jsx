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

    tl.from(".title_Section",{
      scale:1.4,
      opacity: -1,
      rotate: 360
    })

    tl.to(".title_Section",{
      delay: .3,
      letterSpacing: "3px",
      yPercent: -120
    })

    tl.to(".hr_",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_text_section",{
      scale:1.4,
      opacity: -1,
    })

  },[])

  const [ activeColor , setActiveColor ] = useState(false)

  const handlerColor = () => {
    setActiveColor(!activeColor)
  }
  
  return (
    <div  className={activeColor ? "Section_active" : "Section"}>
        <Preload/>
        <div className="title_Section">
            <h1 className='Title_s'>Contact</h1>
            <hr  className={activeColor ? "hr__active" : "hr_"}/>
        </div>
        <div className="box_text_section">
          <p>
          </p>
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