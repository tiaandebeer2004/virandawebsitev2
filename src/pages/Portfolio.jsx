import { useState, useRef, useEffect } from 'react'
import '../components/CSS/Portfolio.css'
import Navbar from '../components/Navbar'
import NavbarBlack from '../components/NavbarBlack'
import Footer from '../components/Footer'
import emaweniWebsite from '../assets/Portfolio/emaweniWebsite.png'
import cosyclosetWebsite from '../assets/Portfolio/cosyclosetWebsite.png'
import davidaWebsite from '../assets/Portfolio/davidaWebsite.png'
import abaleWebsite from '../assets/Portfolio/abaleWebsite.png'
import highmaintenanceWebsite from '../assets/Portfolio/highmaintenanceWebsite.png'
import whackedWebsite from '../assets/Portfolio/whackedWebsite.png'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'

function Portfolio() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();
  const portfolioRef = useRef(null);
    const [position, setPosition] = useState({});

    useEffect(() => {
      const updatePosition = () => {
        if (portfolioRef.current) {
          const rect = portfolioRef.current.getBoundingClientRect();
          setPosition({
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        }
      };
  
      // Initial position update
      updatePosition();
  
      // Update position on scroll and resize events
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
  
      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }, []);

return (
    <div className="Portfolio">
        {(position.top <= 70) ? (
                      <NavbarBlack></NavbarBlack>
                    ) : (
                      <Navbar></Navbar>
                    )}
        
        <div className="portfolioPageBanner">
            <h1 className="portfolioHeading">PORTFOLIO</h1>

            <a className='backgroundTransparent' target="_blank" href='https://www.emawenitugelacanyon.co.za'>
            <div className="portfolioCover" ref={portfolioRef}>
                <img src={emaweniWebsite} alt="emaweni tugela canyon lodge website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">EMAWENI TUGELA CANYON LODGE</heading>
                    <p className="portfolioColumnParagraph">A website for a game lodge</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>
            </a>

            <a className='backgroundTransparent' target="_blank" href='https://www.cosycloset.co.za'>
            <div className="portfolioCover">
                <img src={cosyclosetWebsite} alt="cosy closet website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">COSY CLOSET</heading>
                    <p className="portfolioColumnParagraph">An online store for a second-hand clothing business</p>
                    <a className='backgroundTransparent' target="_blank" href='https://www.cosycloset.co.za'><button className="portfolioButton">View Website</button></a>
                </div>
            </div>
            </a>

            <a className='backgroundTransparent' target="_blank" href='https://www.davidacoffeeco.co.za'>
            <div className="portfolioCover">
                <img src={davidaWebsite} alt="davida coffee co website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">DAVIDA COFFEE CO</heading>
                    <p className="portfolioColumnParagraph">A website for a coffee roastery</p>
                    <a className='backgroundTransparent' target="_blank" href='https://www.davidacoffeeco.co.za'><button className="portfolioButton">View Website</button></a>
                </div>
            </div>
            </a>

            <a className='backgroundTransparent' target="_blank" href='https://www.abalecoffee.co.za'>
            <div className="portfolioCover">
                <img src={abaleWebsite} alt="abale coffee website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">ABALE COFFEE</heading>
                    <p className="portfolioColumnParagraph">A website for a coffee importer</p>
                    <a className='backgroundTransparent' target="_blank" href='https://www.abalecoffee.co.za'><button className="portfolioButton">View Website</button></a>
                </div>
            </div>
            </a>

            <a className='backgroundTransparent' target="_blank" href='https://www.highmaintenancepcc.co.za'>
            <div className="portfolioCover">
                <img src={highmaintenanceWebsite} alt="high maintenance website" className="portfolioCoverImage" />
                                    
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">HIGH MAINTENANCE</heading>
                    <p className="portfolioColumnParagraph">A website for a dispensary</p>
                    <a className='backgroundTransparent' target="_blank" href='https://www.highmaintenancepcc.co.za'><button className="portfolioButton">View Website</button></a>
                </div>
            </div>
            </a>

            <a className='backgroundTransparent' target="_blank" href='https://www.whacked.co.za'>
            <div className="portfolioCover">
                <img src={whackedWebsite} alt="whacked management website" className="portfolioCoverImage" />
                                    
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">WHACKED</heading>
                    <p className="portfolioColumnParagraph">A website for an entertainment agency</p>
                    <a className='backgroundTransparent' target="_blank" href='https://www.whacked.co.za'><button className="portfolioButton">View Website</button></a>
                </div>
            </div>
            </a>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default Portfolio