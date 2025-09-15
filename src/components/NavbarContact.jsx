import { useState } from 'react'
import './CSS/NavbarContact.css'

function NavbarContact() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="NavbarContact">
            <div className="navbarContactColumns">
              <div className="navbarContactLeft">
                <p className="navbarContactViranda">VIRANDA</p>
              </div>

              <div className="navbarContactMiddle">
                <a href="/" className="home">Home</a>
                <a href="" className="services">Services</a>
                <a href="" className="aboutUs">About Us</a>
                <a href="" className="portfolio">Portfolio</a>
                <a href="" className="contact">Contact</a>
              </div>

              <div className="navbarContactRight">
                <button className="freeConsultation">BOOK YOUR FREE CONSULTATION</button> 
              </div>
            </div>
        </div>
    </>
  )
}

export default NavbarContact