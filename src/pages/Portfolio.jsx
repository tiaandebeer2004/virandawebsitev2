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

function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <div className="Portfolio">
        <Navbar></Navbar>
        
        <div className="portfolioPageBanner">
            <h1 className="portfolioHeading">PORTFOLIO</h1>

            <div className="portfolioColumns">
                  <div className="portfolioColumn" href='https://emawenitugelacanyon.co.za'>
                      <img src={emaweniWebsite} alt="emaweni tugela canyon lodge website" className="portfolioImage" />
                      <heading className="portfolioColumnHeading">EMAWENI TUGELA CANYON LODGE</heading>
                      <p className="portfolioColumnParagraph">A website for a game lodge</p>
                  </div>

                  <div className="portfolioColumn">
                      <img src={cosyclosetWebsite} alt="cosy closet website" className="portfolioImage" />
                      <heading className="portfolioColumnHeading">COSY CLOSET</heading>
                      <p className="portfolioColumnParagraph">An online store for a second-hand clothing business</p>
                  </div>

                  <div className="portfolioColumn">
                      <img src={davidaWebsite} alt="davida coffee co website" className="portfolioImage" />
                      <heading className="portfolioColumnHeading">DAVIDA COFFEE CO</heading>
                      <p className="portfolioColumnParagraph">A website for a coffee roastery</p>
                  </div>
            </div>

            <div className="portfolioColumns marginBottom10">
                <div className="portfolioColumn">
                    <img src={abaleWebsite} alt="abale coffee website" className="portfolioImage" />
                    <heading className="portfolioColumnHeading">ABALE COFFEE</heading>
                    <p className="portfolioColumnParagraph">A website for a coffee importer</p>
                </div>

                <div className="portfolioColumn">
                    <img src={highmaintenanceWebsite} alt="high maintenance website" className="portfolioImage" />
                    <heading className="portfolioColumnHeading">HIGH MAINTENANCE</heading>
                    <p className="portfolioColumnParagraph">A website for a dispensary</p>
                </div>

                <div className="portfolioColumn">
                    <img src={whackedWebsite} alt="whacked management website" className="portfolioImage" />
                    <heading className="portfolioColumnHeading">WHACKED</heading>
                    <p className="portfolioColumnParagraph">A website for an entertainment agency</p>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default Portfolio