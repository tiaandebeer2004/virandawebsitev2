import { useState } from 'react'
import NavbarContact from '../components/NavbarContact'
import '../components/CSS/ContactPage.css'
import ContactPageContactSection from '../components/ContactPageContactSection'

function ContactPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="ContactPage">
        <NavbarContact></NavbarContact>
        <ContactPageContactSection></ContactPageContactSection>
    </div>
  )
}

export default ContactPage