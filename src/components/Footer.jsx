import { useState } from 'react'
import '../components/CSS/Footer.css'
import virandaLogoWhite from '../assets/virandaLogoWhite.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerSeperator"></div>

        <div className="footerBottom">
            <div className="footerLeft">
                <p className="footerHeading">Viranda</p>
                <a href="/about" className="footerSubheading">Home</a>
            </div>

            <div className="footerLeftMiddle">
                <p className="footerHeading">Pages</p>
                <a href="/blog/marketing" className="footerSubheading">Services</a>
                <a href="/" className="footerSubheading">About Us</a>
                <a href="/" className="footerSubheading">Portfolio</a>
                <a href="/" className="footerSubheading">Contact</a>
            </div>

            <div className="footerRightMiddle">
                <p className="footerHeading">Services</p>
                <a href="/" className="footerSubheading">Website Development</a>
                <a href="/" className="footerSubheading">Graphic Design</a>
                <a href="/" className="footerSubheading">Social Media Management</a>
                <a href="/" className="footerSubheading">Social Media Content Creation</a>
                <a href="/" className="footerSubheading">Google Ads Management</a>
                <a href="/" className="footerSubheading">Meta/Facebook Ads Management</a>
                <a href="/" className="footerSubheading">Ad Creation</a>
                <a href="/" className="footerSubheading">Search Engine Optimization</a>
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