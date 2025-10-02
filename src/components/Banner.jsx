import { useState } from 'react'
import './CSS/Banner.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'
import useWindowDimensions from './Hooks/useWindowDimensions'
import digitalImage from '../assets/digitalImage.webp'
import { FaArrowUpLong } from "react-icons/fa6";

function Banner() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()
  const { width, height } = useWindowDimensions();

if (width < 795) {
  return (
    <>
        <div className="bannerWrapper">
            <div className="bannerWrapperMobile">
                <div className="bannerMobileTopSection">
                    <h1 className="bannerMobileViranda">VIRANDA.</h1>
                    <p className="bannerMobileCopy">We help businesses grow through targeted Google & Facebook Ads, custom web development, and impactful social media management—plus a full range of digital marketing services designed to get you real results.</p>
                    <a href="#/contact" className="bannerMobileClickHere">Click here for your<br></br>free growth session</a>
                </div>

                <FaArrowUpLong className='bannerMobileArrow'/>

                <img src={digitalImage} alt="digital marketing" className="bannerMobileDigitalWrapper" />

                <div className="bannerMobileCircle"></div>
            </div>
        </div>
    </>
  )
} else {
    return (
    <>
        <div className="bannerWrapper">
            <div className="banner">
                <div className="bannerHeading">
                    <p className="viranda">VIRANDA</p>

                    <ul className="bannerUL">
                        <li className="webDesign" style={{ position: 'relative', left: (0 - (scrollY/50)) + 'vh', top: (0 - (scrollY/100)) + 'vh' }}>WEB DESIGN</li>
                        <li className="graphicDesign" style={{ position: 'relative', left: (0 - (scrollY/50)) + 'vh', top: (0 - (scrollY/100)) + 'vh' }}>GRAPHIC DESIGN</li>
                        <li className="socialMedia" style={{ position: 'relative', right: (0 - (scrollY/50)) + 'vh', bottom: (0 - (scrollY/100)) + 'vh' }}>SOCIAL MEDIA</li>
                        <li className="adManagement" style={{ position: 'relative', right: (0 - (scrollY/50)) + 'vh', bottom: (0 - (scrollY/100)) + 'vh' }}>AD MANAGEMENT</li>
                    </ul>
                </div>

                <div className="getQuote">
                    <p className="moreClients">Taking on more clients? Stop hoping, start closing.</p>
                    <a href="#/contact"><button className="contactUs">Free Growth Session</button></a>
                </div>
            </div>
        </div>
    </>
  )
}

}

export default Banner
