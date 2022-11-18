import React from 'react'
import SceneWebGl from '../scene/Scene'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <SceneWebGl/>

      <div className="box_titleHeader">
        <h1 className='titleMintz'>Blockchain <br /> <span>WHERE YOUR IDEAS BECOME REAL</span> </h1>
      </div>


      <div className="presentMintz">
        <h2 className='titleContainer'>about us</h2>
        <div className="box_about">
            <p>
            We are Mintz, specialists in blockchain application development. We combine the potential of web2 / web3 and make your project possible with the best quality. <br/> We keep up with bleeding-edge technologies.
            </p>
        </div>
      </div>

      <div className="box_technology">
        <h2 className='titleContainer'>TECHNOLOGY'S</h2>
      </div>

      <div className="footer"></div>
    </div>
  )
}

export default Header