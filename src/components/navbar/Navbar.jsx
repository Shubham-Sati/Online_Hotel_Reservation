import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Hotel Booking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">LogIn</button>
            </div> 
        </div>
    </div>
  )
}

export default Navbar