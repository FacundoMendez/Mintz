import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./preload.css"

const Preload = () => {

  useEffect(() => {

    gsap.to(".top_box" , {
      delay:.7,
      y:"-55rem",
    })
    gsap.to(".bottom_box" , {
      delay:.7,
      y:"55rem",
    })

    gsap.set(".preload" , {
      delay:2,
      display:"none"
    })

  },[])

  return (
    <div className="preload">
        <div className="top_box"></div>
        <div className="bottom_box"></div>
    </div>
  )
}

export default Preload