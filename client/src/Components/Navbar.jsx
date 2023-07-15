import { NavLink } from "react-router-dom"
import "../Assets/Css/Navbar.css"
export default function Navbar() {
    return (
      <header className="background-image">        
          <nav>
          <h1><a href="#">GUIDE<span>AL</span></a></h1>
              <ul>
                  <li>HOME</li>
                  <li>ROOMS</li>
                  <li>EVENTS</li>
                  <li>ABOUT</li>
                  <li>CONTACT</li>
              </ul>
                  <div className="secondary-nav">
                    <li><NavLink to="/Login">LOGIN</NavLink></li>
                    <li><NavLink to="/Register">REGISTER</NavLink></li>
                  </div>
          </nav>
          <div className="hero-text">
            <h1>Welcome to guideal </h1>
            <h6>Hotel & Resort</h6>
          </div>
      </header>
    )
  }
  