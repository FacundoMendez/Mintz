import React, { useEffect, useState } from 'react'
import Preload from '../../preload/Preload'
import "./aboutSection.css"
import gsap from 'gsap'
import lightBlack from "../../assets/lightBlack.png"
import lightWhite from "../../assets/lightWhite.png"


const AboutSection = () => {
  
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
      top: -80
    })

    tl.to(".hr_",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_text_section",{
      scale:1.4,
      opacity: -1,
    })

    tl.from(".section_techonlogy",{
      scale:1.4,
      opacity: -1,
    })

    tl.to(".hr_tec",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_text_tec",{
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

      <div className="container_section">

        <div className="title_Section">
              <h1 className='Title_s'>About</h1>
              <hr className={activeColor ? "hr_active" : "hr_"}/>
          </div>
          <div className="box_text_section">
            <p>
              We are Mintz, specialists in blockchain application development. We combine the potential of web2 / web3 and make your project possible with the best quality. <br/> <strong>We keep up with bleeding-edge technologies.</strong> 
            </p>
          </div>

          <div className=" section_techonlogy">
            <div className="title_tec">
              <h2 className='Title_tic'>technologies</h2>
              <hr className={activeColor ? "hr_active_tec" : "hr_tec"}/>
            </div>
            <div className="box_text_tec">
              <p className='textTec'>
                We work with the latest technologies on the market, we are artists, experts in design and user experience. Our team is made up of web2 and web3 experts. You contact us and we make your project a reality.
              </p>
            </div>
          </div>
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

export default AboutSection