import React from 'react'
import "./home.css"
import Main from './main/Main'
import paintIcon from "../assets/paint.png"

const Home = () => {
  return (
    <div className="home">
      <Main/>
      <button className='colorchange'><img src={paintIcon} alt="painticon" /></button>

    </div>
  )
}

export default Home