import React from 'react'
import { NavLink } from 'react-router-dom'
import "./services.css"

const Services = () => {
  return (
    <div className="box_services" id='services'>
        <h2 className='titleContainer'>Services</h2>
        <p>
            We have a wide range of services, we handle a high level of development/design, focused on the best user experience. Look at our catalog of services.
        </p>

        <NavLink to="Services">
            <div className="services_button_section">
                Services
            </div>
        </NavLink>
    </div>
  )
}

export default Services