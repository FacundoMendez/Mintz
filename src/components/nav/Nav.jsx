import React, { useState } from 'react'
import "./nav.css"

const Nav = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "nav_active" : "nav"}>
      <p className='titleNav'>MINTZ</p>
      <div className="toggle" onClick={handleToggle}>
        <div className={ isActive ? "line line1_active" : "line line1"}></div>
        <div className={ isActive ? "line line2_active" : "line line2"}></div>
        <div className={ isActive ? "line line3_active" : "line line3"}></div>
      </div>
    </div>
  )
}

export default Nav