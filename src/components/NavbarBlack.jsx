import { useState } from 'react'
import './CSS/NavbarBlack.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import StaggeredMenuBlack from './StaggeredMenuBlack'

function NavbarBlack() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();

  const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'View our services', link: '/#/services' },
  { label: 'Portfolio', ariaLabel: 'View our portfolio', link: '/#/portfolio' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/#/about' },
  { label: 'Contact', ariaLabel: 'Contact us', link: '/#/contact' }
];

const socialItems = [

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
                <a href="/" className="homeBlack unBlack">Home</a>
                <a href="/#/services" className="servicesBlack unBlack">Services</a>
                <a href="/#/about" className="aboutUsBlack unBlack">About Us</a>
                <a href="/#/portfolio" className="portfolioBlack unBlack">Portfolio</a>
                <a href="/#/contact" className="contactBlack unBlack">Contact</a>
              </div>

              <div className="navbarRightBlack">
                <a href="/#/contact"><button className="freeConsultationBlack">Let's Talk</button></a>
              </div>
            </div>
        </div>
    </>
  )
} else {
  return (
    <div className='StaggeredMenuWrap'>
          <StaggeredMenuBlack
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