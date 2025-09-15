import { useState } from 'react'
import '../components/CSS/ServicesPage.css'
import NavbarContact from '../components/NavbarContact'
import ServicesPageServicesSection from '../components/ServicesPageServicesSection'
import ServicesPageServices from '../components/ServicesPageServices'

function ServicesPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="ServicesPage">
        <NavbarContact></NavbarContact>
        <ServicesPageServicesSection></ServicesPageServicesSection>
        <ServicesPageServices></ServicesPageServices>
    </div>
  )
}

export default ServicesPage