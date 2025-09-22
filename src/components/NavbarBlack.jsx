import { useState } from 'react'
import './CSS/NavbarBlack.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import StaggeredMenu from './StaggeredMenu'

function NavbarBlack() {
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
        <div className="NavbarBlack">
            <div className="navbarColumnsBlack">
              <div className="navbarLeftBlack">
                <p className="VIRANDABlack">VIRANDA</p>
              </div>

              <div className="navbarMiddleBlack">
                <a href="/virandawebsitev2/" className="homeBlack unBlack">Home</a>
                <a href="/virandawebsitev2/#/services" className="servicesBlack unBlack">Services</a>
                <a href="/virandawebsitev2/#/about" className="aboutUsBlack unBlack">About Us</a>
                <a href="/virandawebsitev2/#/portfolio" className="portfolioBlack unBlack">Portfolio</a>
                <a href="/virandawebsitev2/#/contact" className="contactBlack unBlack">Contact</a>
              </div>

              <div className="navbarRightBlack">
                <button className="freeConsultationBlack">Let's Talk</button> 
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

export default NavbarBlack