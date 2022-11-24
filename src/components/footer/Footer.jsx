import React, { useEffect, useState } from 'react'
import "./footer.css"
import gsap from 'gsap'

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      duration: 1
    })

    tl.from(".title_footer_contact",{
      scale:1.4,
      opacity: -1,
      rotate: 360
    })

    tl.to(".title_footer_contact",{
      delay: .3,
      letterSpacing: "3px",
      yPercent: -40
    })

    tl.to(".hr_contact",{
      opacity: 1,
      width: "100%"
    })


    tl.from(".box_contact_main",{
      scale:1.4,
      opacity: -1,
    })
    tl.to(".sendContact_main",{
      opacity: 1,
    })
    
  },[])


  return (
    <div className="footer">
      <div className="title_footer_contact">

        <div className="title_contact_footer">
              <h1 className='Title_s'>Contact</h1>
              <hr  className="hr_contact"/>
        </div>
      </div>
      <form className="box_contact_main">
        <input type="text" required placeholder='Name' />
        <input type="email" required placeholder='Email' />
        <textarea className='pp_main' required name="textArea_contact" id="textArea_contact" cols="30" rows="10" placeholder='Messaje'></textarea>
      
        <button className="sendContact_main" type='submit'>
            Send
        </button>
      </form>
    </div>


  )
}

export default Footer