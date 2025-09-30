import { useState } from 'react'
import './CSS/Banner.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'
import useWindowDimensions from './Hooks/useWindowDimensions'

function Banner() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()
  const { width, height } = useWindowDimensions();

if (width < 800) {
  return (
    <>
        <div className="bannerWrapper">
            <div className="banner">
                <div className="bannerHeading">
                    <p className="viranda">VIRANDA</p>

                    <ul className="bannerUL">
                        <li className="webDesign">WEB<br></br>DESIGN</li>
                        <li className="graphicDesign">GRAPHIC<br></br>DESIGN</li>
                        <li className="socialMedia">SOCIAL<br></br>MEDIA</li>
                        <li className="adManagement">AD<br></br>MANAGEMENT</li>
                    </ul>
                </div>

                <div className="getQuote">
                    <p className="moreClients">Taking on more clients? Stop hoping, start closing.</p>
                    <button className="contactUs">Free Growth Session</button>
                </div>
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
                        <li className="webDesign">WEB DESIGN</li>
                        <li className="graphicDesign">GRAPHIC DESIGN</li>
                        <li className="socialMedia">SOCIAL MEDIA</li>
                        <li className="adManagement">AD MANAGEMENT</li>
                    </ul>
                </div>

                <div className="getQuote">
                    <p className="moreClients">Taking on more clients? Stop hoping, start closing.</p>
                    <button className="contactUs">Free Growth Session</button>
                </div>
            </div>
        </div>
    </>
  )
}

}

export default Banner
