import { useState } from 'react'
import './CSS/Hero2.css'
import ghostIcon from '../assets/ghostIcon.png'
import burnMoneyIcon from '../assets/burnMoney.jpg'
import clickIcon from '../assets/clickIcon.jpg'
import { motion } from 'framer-motion'

function Hero2() {
  const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="Hero2">
            <div className="hero2Left">
                <h2 className="hero2LeftHeading">WE KNOW.<br></br>YOU'RE TIRED OF:<br></br></h2>
                    
                <div className="hero2TaglinesGroup">
                    <div className="hero2TaglineGroup">
                        <img src={ghostIcon} alt="ghost icon" className="circle" />
                        <p className="hero2Taglines">Agencies that ghost you once you pay the invoice</p>
                    </div>

                    <div className="hero2TaglineGroup">
                        <img src={burnMoneyIcon} alt="burn money icon" className="circle" />
                        <p className="hero2Taglines">Wasting money on unqualified/uninterested "leads"</p>
                    </div>

                    <div className="hero2TaglineGroup">
                        <img src={clickIcon} alt="click icon" className="circle" />
                        <p className="hero2Taglines">Marketing that chases clicks instead of sales</p>
                    </div>
                </div>

                <p className="hero2Paragraph">That's why we offer digital marketing solutions that actually drive sales, provide you with ongoing support, and talk to you like you're a friend instead of a credit card. We're committed to treating your business with the same love and care as our own, delivering measurable, impactful and profitable results.</p>
                <div className="hero2ButtonGroup">
                    <a href="/#/services" className='hero2ButtonAMobile'><button className="hero2OurServices">Our Services</button></a>
                    <a href="/#/contact" className='hero2ButtonAMobile'><button className="hero2ContactUs">Contact Us</button></a>
                </div>
            </div>

            <div className="hero2Right">

            </div>
        </div>
      </>
    )
  }

export default Hero2