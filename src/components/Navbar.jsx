import { useState } from 'react'
import './CSS/Navbar.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import StaggeredMenu from './StaggeredMenu'

function Navbar() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();

  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Portfolio', ariaLabel: 'View our services', link: '/services' },
  { label: 'About', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
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
                <a href="/virandawebsitev2/" className="home un">Home</a>
                <a href="/virandawebsitev2/#/services" className="services un">Services</a>
                <a href="/virandawebsitev2/#/about" className="aboutUs un">About Us</a>
                <a href="/virandawebsitev2/#/portfolio" className="portfolio un">Portfolio</a>
                <a href="/virandawebsitev2/#/contact" className="contact un">Contact</a>
              </div>

              <div className="navbarRight">
                <button className="freeConsultation">Let's Talk</button> 
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