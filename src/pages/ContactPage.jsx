import { useState } from 'react'
import '../components/CSS/ContactPage.css'
import ContactPageContactSection from '../components/ContactPageContactSection'
import NavbarBlack from '../components/NavbarBlack'
import Footer from '../components/Footer'

function ContactPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="ContactPage">
        <NavbarBlack></NavbarBlack>
        <ContactPageContactSection></ContactPageContactSection>
        <Footer></Footer>
    </div>
  )
}

export default ContactPage