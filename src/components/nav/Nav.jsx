import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom';

const Nav = () => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "nav_active" : "nav"}>
     <a href="/"> <p className='titleNav'>MINTZ</p></a>
      <div className="toggle" onClick={handleToggle}>
        <div className={ isActive ? "line line1_active" : "line line1"}></div>
        <div className={ isActive ? "line line2_active" : "line line2"}></div>
        <div className={ isActive ? "line line3_active" : "line line3"}></div>
      </div>
      {isActive ? 
        <ul className='list_nav' >
          <NavLink to="/"            >  <li onClick={() => handleToggle()}>Home         </li> </NavLink>
          <NavLink to="./About"     >  <li onClick={() => handleToggle()}>About        </li> </NavLink>
          <NavLink to="./Services"  >  <li onClick={() => handleToggle()}>Our Services </li> </NavLink>
          <NavLink to="./Contact"   >  <li onClick={() => handleToggle()}>Contact      </li> </NavLink>
        </ul>
        : 
        null
      }

    </div>
  )
}

export default Nav