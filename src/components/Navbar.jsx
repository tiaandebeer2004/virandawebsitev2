import { useState } from 'react'
import './CSS/Navbar.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import StaggeredMenu from './StaggeredMenu'

function Navbar() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();

  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'View our services', link: '#/services' },
  { label: 'Portfolio', ariaLabel: 'View our portfolio', link: '#/portfolio' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#/about' },
  { label: 'Contact', ariaLabel: 'Contact us', link: '#/contact' }
];

const socialItems = [
  
];


if (width > 795) {
  return (
    <>
        <div className="Navbar">
            <div className="navbarColumns">
              <div className="navbarLeft">
                <p className="VIRANDA">VIRANDA</p>
              </div>

              <div className="navbarMiddle">
                <a href="/" className="home un">Home</a>
                <a href="#/services" className="services un">Services</a>
                <a href="#/about" className="aboutUs un">About Us</a>
                <a href="#/portfolio" className="portfolio un">Portfolio</a>
                <a href="#/contact" className="contact un">Contact</a>
              </div>

              <div className="navbarRight">
                <a href="#/contact"><button className="freeConsultation">Let's Talk</button></a>
              </div>
            </div>
        </div>
    </>
  )
} else {
  return (
    <div className='StaggeredMenuWrap'>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={false}
            colors={['#EE6B6E', '#FF0000']}
            logoUrl="../assets/virandaLogoBlack.png"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>
  )
}

}

export default Navbar