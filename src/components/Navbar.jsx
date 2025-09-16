import { useState } from 'react'
import './CSS/Navbar.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import StaggeredMenu from './StaggeredMenu'

function Navbar() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();

  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];


if (width > 750) {
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
            changeMenuColorOnOpen={true}
            colors={['#EE6B6E', '#FF0000']}
            logoUrl="/path-to-your-logo.svg"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>
  )
}

}

export default Navbar