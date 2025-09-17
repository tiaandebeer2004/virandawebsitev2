import { useState } from 'react'
import '../components/CSS/Portfolio.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import cosyclosetWebsite from '../assets/cosyclosetWebsite.png'

function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <div className="Portfolio">
        <Navbar></Navbar>
        
        <div className="portfolioPageBanner">
            <h1 className="portfolioHeading">PORTFOLIO</h1>

            <div className="portfolioColumns">
                <div className="portfolioColumn">
                    <img src={cosyclosetWebsite} alt="cosy closet website" className="portfolioImage" />
                    <heading className="portfolioColumnHeading">COSY CLOSET</heading>
                    <p className="portfolioColumnParagraph">A website</p>
                </div>

                <div className="portfolioColumn">
                    
                </div>

                <div className="portfolioColumn">
                    
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default Portfolio