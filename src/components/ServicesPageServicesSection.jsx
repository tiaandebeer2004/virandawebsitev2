import { useState } from 'react'
import '../components/CSS/ServicesPageServicesSection.css'

function ServicesPageServicesSection() {
  const [count, setCount] = useState(0)

  return (
    <div className="ServicesPageServicesSection">
        <h1 className="servicesPageOurServices">OUR<br></br>SERVICES</h1>
        <p className="servicesPageHeadingParagraph">We help businesses grow through targeted Google & Facebook Ads, custom web development, and impactful social media management—plus a full range of digital marketing services designed to get you real results.</p>
    </div>
  )
}

export default ServicesPageServicesSection