import React, { useEffect, useState } from 'react'
import Preload from '../../preload/Preload'
import "./servicesSection.css"
import gsap from 'gsap'
import lightBlack from "../../assets/lightBlack.png"
import lightWhite from "../../assets/lightWhite.png"


const ServicesSection = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      duration: 1
    })

    tl.from(".title_Section_services",{
      scale:1.4,
      opacity: -1,
      rotate: 360
    })

    tl.to(".title_Section_services",{
      delay: .3,
      letterSpacing: "3px",
      yPercent: -120
    })

    tl.to(".hr_",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_text_section_services",{
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
        <div className="box_section_service">
          <div className="title_Section_services">
              <h1 className='Title_s'>Services</h1>
              <hr  className={activeColor ? "hr_active" : "hr_"}/>
          </div>
          <div className="box_text_section_services">
            <p>We have a wide range of services, do not hesitate to contact us for your project</p>
            <ul>
              <li>Web3 (Blockchain) </li>
              <li>Web2</li>
              <li>3D Designs</li>
              <li>Ux/Ui</li>
              <li>NFT's</li>
              <li>Creative Websites</li>
              <li>e-Commerce</li>
              <li>Mobile Experience</li>
              <li>Support and Maintenance</li>
              <li>Advisory</li>
            </ul>
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



export default ServicesSection