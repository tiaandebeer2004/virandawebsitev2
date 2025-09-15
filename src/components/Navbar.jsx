import { useState } from 'react'
import './CSS/Navbar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="Navbar">
            <div className="navbarColumns">
              <div className="navbarLeft">
                <p className="VIRANDA">VIRANDA</p>
              </div>

              <div className="navbarMiddle">
                <a href="/" className="home">Home</a>
                <a href="" className="services">Services</a>
                <a href="" className="aboutUs">About Us</a>
                <a href="" className="portfolio">Portfolio</a>
                <a href="" className="contact">Contact</a>
              </div>

              <div className="navbarRight">
                <button className="freeConsultation">BOOK YOUR FREE CONSULTATION</button> 
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar