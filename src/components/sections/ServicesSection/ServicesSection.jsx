import React, { useEffect, useState } from 'react'
import Preload from '../../preload/Preload'
import "./servicesSection.css"
import gsap from 'gsap'
import lightBlack from "../../assets/lightBlack.png"
import lightWhite from "../../assets/lightWhite.png"
import { NavLink } from 'react-router-dom'


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
      yPercent: -70
    })

    tl.to(".hr_service",{
      opacity: 1,
      width: "100%"
    })

    tl.from(".box_text_section_services",{
      scale:1.4,
      opacity: -1,
    })

    tl.to(".contact_button_select",{
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
        <div className="box_section_service">
          <div className="title_Section_services">
              <h1 className='Title_s'>Services</h1>
              <hr  className={activeColor ? "hr_active_service" : "hr_service"}/>
          </div>
          <div className="box_text_section_services">
            <p>We have a wide range of services, do not hesitate to contact us for your project</p>
            
            <div className="box_list_services">
              <ul className='listSectionServices'>
                <li>Web3 (Blockchain) </li>
                <li>Web2</li>
                <li>3D Designs</li>
                <li>Ux/Ui</li>
                <li>NFT's</li>
              </ul>

              <ul className='listSectionServices2'>
                <li>Creative Websites</li>
                <li>e-Commerce</li>
                <li>Mobile Experience</li>
                <li>Support and Maintenance</li>
                <li>Advisory</li>
              </ul>
            </div>
          </div>
          <NavLink to="/Contact">
            <div className={activeColor ? "contact_button_select_active" : "contact_button_select"}>
               Contact
            </div>
          </NavLink>
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