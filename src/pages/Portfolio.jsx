import { useState } from 'react'
import '../components/CSS/Portfolio.css'
import Navbar from '../components/Navbar'
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

return (
    <div className="Portfolio">
        <Navbar></Navbar>
        
        <div className="portfolioPageBanner">
            <h1 className="portfolioHeading">PORTFOLIO</h1>

            <div className="portfolioCover">
                <img src={emaweniWebsite} alt="emaweni tugela canyon lodge website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">EMAWENI TUGELA CANYON LODGE</heading>
                    <p className="portfolioColumnParagraph">A website for a game lodge</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>

            <div className="portfolioCover">
                <img src={cosyclosetWebsite} alt="cosy closet website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">COSY CLOSET</heading>
                    <p className="portfolioColumnParagraph">An online store for a second-hand clothing business</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>

            <div className="portfolioCover">
                <img src={davidaWebsite} alt="davida coffee co website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">DAVIDA COFFEE CO</heading>
                    <p className="portfolioColumnParagraph">A website for a coffee roastery</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>

            <div className="portfolioCover">
                <img src={abaleWebsite} alt="abale coffee website" className="portfolioCoverImage" />
                
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">ABALE COFFEE</heading>
                    <p className="portfolioColumnParagraph">A website for a coffee importer</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>

            <div className="portfolioCover">
                <img src={highmaintenanceWebsite} alt="high maintenance website" className="portfolioCoverImage" />
                                    
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">HIGH MAINTENANCE</heading>
                    <p className="portfolioColumnParagraph">A website for a dispensary</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>
           
            <div className="portfolioCover">
                <img src={whackedWebsite} alt="whacked management website" className="portfolioCoverImage" />
                                    
                <div className="portfolioCoverText">
                    <heading className="portfolioColumnHeading">WHACKED</heading>
                    <p className="portfolioColumnParagraph">A website for an entertainment agency</p>
                    <button className="portfolioButton">View Website</button>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default Portfolio