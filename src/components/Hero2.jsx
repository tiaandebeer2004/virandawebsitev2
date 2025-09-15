import { useState } from 'react'
import './CSS/Hero2.css'

function Hero2() {
  const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="Hero2">
            <div className="hero2Left">
                <h2 className="hero2LeftHeading">WE KNOW. YOU'RE TIRED OF:<br></br></h2>
                <p className="hero2Taglines">- Agencies that ghost you once you pay the invoice<br></br>- Marketing that chases clicks instead of sales<br></br>- Wasting money on unqualified/uninterested "leads"</p>
                <p className="hero2Paragraph">That's why we offer digital marketing solutions that actually drive sales, provide you with ongoing support, and talk to you like you're a friend instead of a credit card. We're committed to treating your business with the same love and care as our own, delivering measurable, impactful and profitable results.</p>
                <div className="hero2ButtonGroup">
                    <button className="hero2OurServices">OUR SERVICES</button>
                    <button className="hero2ContactUs">CONTACT US</button>
                </div>
            </div>

            <div className="hero2Right">

            </div>
        </div>
      </>
    )
  }

export default Hero2