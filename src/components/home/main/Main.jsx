import React from 'react'
import Footer from '../../footer/Footer'
import About from '../about/about'
import Header from '../header/Header'
import SceneWebGl from '../scene/Scene'
import Technologys from '../Technologys/Technologys'
import "./main.css"

const Main = () => {
  return (
    <div className="main">
      <SceneWebGl/>

      <Header/>
      <About/>
   
      <Technologys/>

      <Footer/>

    </div>
  )
}

export default Main