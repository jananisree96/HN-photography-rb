import React from 'react'
import logo from '../images/hnlogo.png'

const Loader = () => {
  return (
    <div className="loader-container">
        <div className="loader">
            <img src={logo} alt="Loading..." />
        </div>
    </div>
  )
}

export default Loader