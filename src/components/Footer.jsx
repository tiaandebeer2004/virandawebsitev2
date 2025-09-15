import { useState } from 'react'
import '../components/CSS/Footer.css'
import virandaLogoBlack from '../assets/virandaLogoBlack.png'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <div className="Footer">
        <div className="footerColumns">
            <div className="footerLeft">
                <img src={virandaLogoBlack} alt="black viranda logo" className="footerLogo" />
                <p className="footerViranda">VIRANDA</p>
            </div>

            <div className="footerRight">
                <p className="footerViranda footerContactHeading">Contact Us:</p>
                <p className="footerContactInfo"><br></br>Tiaan - Director of Technical Services:<br></br>065 946 2507<br></br>tiaan@viranda.co.za</p>
                <p className="footerContactInfo"><br></br>Cayden - Director of Creative Services:<br></br>082 216 1042<br></br>cayden@viranda.co.za</p>
            </div>
        </div>
    </div>
  )
}

export default Footer