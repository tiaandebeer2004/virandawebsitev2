import { useState } from 'react'
import '../components/CSS/Footer.css'
import virandaLogoWhite from '../assets/virandaLogoWhite.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerSeperator"></div>

        <div className="footerBottom">
            <div className="footerLeft">
                <p className="footerHeading">About</p>
                <a href="/about" className="footerSubheading">Our Story</a>
            </div>

            <div className="footerLeftMiddle">
                <p className="footerHeading">Blog</p>
                <a href="/blog/marketing" className="footerSubheading">Marketing</a>
                <a href="/" className="footerSubheading">Design</a>
                <a href="/" className="footerSubheading">Web Development</a>
                <a href="/" className="footerSubheading">Social Media</a>
            </div>

            <div className="footerRightMiddle">
                <p className="footerHeading">Services</p>
                <a href="/" className="footerSubheading">Web Development</a>
                <a href="/" className="footerSubheading">Social Media</a>
                <a href="/" className="footerSubheading">SEO</a>
                <a href="/" className="footerSubheading">Ad Management</a>
                <a href="/" className="footerSubheading">Graphic Design</a>
            </div>

            <div className="footerRight">
                <img className="footerVirandaLogo" src={virandaLogoWhite}></img>
                <p className="footerHeading">Contact</p>
                <p className="footerSubheading">Email - info@viranda.co.za</p>
                <p className="footerSubheading">Cayden Cell - 082 216 1042</p>
                <p className="footerSubheading">Tiaan Cell - 065 946 2507</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;