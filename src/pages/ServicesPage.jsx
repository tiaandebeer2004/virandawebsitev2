import { useState } from 'react'
import '../components/CSS/ServicesPage.css'
import ServicesPageServicesSection from '../components/ServicesPageServicesSection'
import ServicesPageServices from '../components/ServicesPageServices'
import Navbar from '../components/Navbar'

function ServicesPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="ServicesPage">
        <Navbar></Navbar>
        <ServicesPageServicesSection></ServicesPageServicesSection>
        <ServicesPageServices></ServicesPageServices>
    </div>
  )
}

export default ServicesPage