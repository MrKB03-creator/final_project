import React from 'react'
import './Navbar.css'
import logo from './Images/StayHealthy.png'

function Navbar() {
  return (
    <div className="navbar">
            <div className="navbar__logo">
                <a href="#"><img src={logo} alt="StayHealthy-Logo"/></a>
            </div>
            <div className="navbar__menu">
                <ul className="navbar__menu-left">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Appointments</a></li>
                    <li><a href="#">Health Blog</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
                <ul className="navbar__menu-right">
                    <li><a href="../Sign_Up/Sign_Up.html"><button>Sign Up</button></a></li>
                    <li><a href="../Login/Login.html"><button>Login</button></a></li>
                </ul>
            </div>  
    </div>
  )
}

export default Navbar
