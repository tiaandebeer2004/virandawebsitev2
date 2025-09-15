import { useState } from 'react'
import './CSS/Banner.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'

function Banner() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()
  
  return (
    <>
        <div className="bannerWrapper">
            <div className="banner">
                <div className="bannerHeading">
                    <p className="viranda">VIRANDA</p>

                    <ul className="bannerUL">
                        <li className="webDesign">WEB DESIGN</li>
                        <li className="graphicDesign">GRAPHIC DESIGN</li>
                        <li className="socialMedia">SOCIAL MEDIA</li>
                        <li className="adManagement">AD MANAGEMENT</li>
                    </ul>
                </div>

                <div className="getQuote">
                    <p className="moreClients">Taking on more clients? Stop hoping, start closing.</p>
                    <button className="contactUs">Contact Us</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
