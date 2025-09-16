import { useState } from 'react'
import '../components/CSS/AboutUs.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutUsImage1 from '../assets/aboutUsImage1.png'

function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <div className="AboutUs">
      <Navbar></Navbar>
      
      <div className="aboutUsPageBanner">
        <h1 className="aboutUsHeading">ABOUT US</h1>
        <p className="aboutUsSubheading">At Viranda, we help grow businesses across South Africa through results-driven digital marketing services. We develop strategies that bring in real sales – not just likes and clicks. We know the frustration caused by agencies that overpromise and underdeliver, which is why focus on building honest partnerships with all of our clients – keeping you informed during every step of the process. We set extremely high standards for ourselves – and we’re committed to turning your marketing budget into measurable growth.</p>
      </div>

      <div className="aboutUsRed">
        <div className="aboutUsRedColumnsFromLeft">
            <div className="aboutUsRedTextColumn">
                <h3 className="aboutUsColumnHeading">WHERE WE STARTED:</h3>
                <p className="aboutUsColumnParagraph">Our story began in Port Elizabeth/Gqeberha, South Africa, where two bandmates decided to take their creativity off of the stage and into the digital space – and Viranda was born. What started as Cayden and Tiaan’s small passion project has grown into a thriving digital marketing agency serving small and large businesses across South Africa. Today, we combine the same creativity, collaboration, and harmony from our founders’ band days with results-driven digital marketing strategies in order to help businesses grow, stand out, and succeed in the online age.</p>
            </div>

            <div className="aboutUsRedImageColumn">
                <img src={aboutUsImage1} alt="viranda founders playing in band" className="aboutUsImage1" />
            </div>
        </div>

        <div className="aboutUsRedColumnsFromLeft">
            <div className="aboutUsRedImageColumn">
                <img src={aboutUsImage1} alt="viranda founders playing in band" className="aboutUsImage1" />
            </div>

            <div className="aboutUsRedTextColumn">
                <h3 className="aboutUsColumnHeading">WHERE WE ARE NOW:</h3>
                <p className="aboutUsColumnParagraph">From our roots in Port Elizabeth, we’ve matured into a trusted digital marketing agency serving businesses across South Africa. We manage websites, social media, and Google/Meta ad campaigns in industries ranging from small coffee roasters to huge management agencies. Our team has expanded, our skills have improved, and our results speak for themselves – helping businesses reach more customers, make more sales, and scale with confidence. What hasn’t changed is our values and our commitment to transparency, communication, and delivering work that makes a real difference.</p>
            </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default AboutUs