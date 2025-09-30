import { useState } from 'react'
import './CSS/Banner.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'
import useWindowDimensions from './Hooks/useWindowDimensions'

function Banner() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()
  const { width, height } = useWindowDimensions();

if (width < 795) {
  return (
    <>
        <div className="bannerWrapper">
            <div className="banner">
                <div className="bannerHeading">
                    <p className="viranda">VIRANDA</p>

                    <ul className="bannerUL">
                        <li className="webDesign">WEB</li>
                        <li className="webDesign2">DESIGN</li>
                        <li className="graphicDesign">GRAPHIC</li>
                        <li className="graphicDesign2">DESIGN</li>
                        <li className="socialMedia">SOCIAL</li>
                        <li className="socialMedia2">MEDIA</li>
                        <li className="adManagement">AD</li>
                        <li className="adManagement2">MANAGEMENT</li>
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
                        <li className="webDesign" style={{ position: 'relative', left: (0 - (scrollY/50)) + 'vh', top: (0 - (scrollY/100)) + 'vh' }}>WEB DESIGN</li>
                        <li className="graphicDesign" style={{ position: 'relative', left: (0 - (scrollY/50)) + 'vh', top: (0 - (scrollY/100)) + 'vh' }}>GRAPHIC DESIGN</li>
                        <li className="socialMedia" style={{ position: 'relative', right: (0 - (scrollY/50)) + 'vh', bottom: (0 - (scrollY/100)) + 'vh' }}>SOCIAL MEDIA</li>
                        <li className="adManagement" style={{ position: 'relative', right: (0 - (scrollY/50)) + 'vh', bottom: (0 - (scrollY/100)) + 'vh' }}>AD MANAGEMENT</li>
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
