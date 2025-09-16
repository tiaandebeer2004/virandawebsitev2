import { useState } from 'react'
import '../components/CSS/ContactPage.css'
import ContactPageContactSection from '../components/ContactPageContactSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="ContactPage">
        <Navbar></Navbar>
        <ContactPageContactSection></ContactPageContactSection>
        <Footer></Footer>
    </div>
  )
}

export default ContactPage