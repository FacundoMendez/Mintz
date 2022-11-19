import React from 'react'
import Preload from '../../preload/Preload'
import "./aboutSection.css"


const AboutSection = () => {
  return (
    <div className="aboutSection">
        <Preload/>
        <div className="titleAbout_Section">
            <h1>About</h1>
        </div>
    </div>
  )
}

export default AboutSection