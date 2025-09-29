import { useState } from 'react'
import '../components/CSS/ContactPageContactSectionHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactPageContactSection() {
  const [count, setCount] = useState(0)

  return (
    <div className="ContactPageContactSectionHome">
        <div className="contactPageContactSectionColumnsHome">
            <div className="contactPageContactSectionLeftHome">
                <h2 className="contactPageContactSectionHeadingHome">LET'S TALK <span className='contactLinearWipeHome'>BUSINESS</span></h2> 
                <p className="contactPageContactSectionParagraphHome">Ready to grow? You're only one step away from scaling beyond your wildest dreams.</p>
                <p className="contactPageContactSectionContactDetailsHome">CONTACT DETAILS:</p>
                <p className="contactPageContactSectionParagraph2Home"><FontAwesomeIcon className="contactPageIconHome" icon={faPhone} />&nbsp;&nbsp;065 946 2507 / 082 216 1042</p>
                <p className="contactPageContactSectionParagraph2Home"><FontAwesomeIcon className="contactPageIconHome" icon={faEnvelope} />&nbsp;&nbsp;tiaan@viranda.co.za / cayden@viranda.co.za</p>
            </div>

            <div className="contactPageContactSectionRightHome">
                <form className="contactPageFormHome" action="https://api.web3forms.com/submit" method='POST'>
                    <h2 className="contactPageFormHeadingHome">SEND US A MESSAGE:</h2>

                    <input type="hidden" name="access_key" value="ffcb9a0c-8cfd-424b-aff4-40e2ee148b6c"/>

                    <div className="contactPageFormInputBoxHome">
                        <label className="contactFormInputLabelHome">Name:</label>
                        <input name='name' type="text" className="contactFormInputHome" placeholder="Enter your name"/>
                    </div>

                    <div className="contactPageFormInputBoxHome">
                        <label className="contactFormInputLabelHome">Phone Number:</label>
                        <input name='phoneNumber' type="number" className="contactFormInputHome" required placeholder="Enter your phone number"/>
                    </div>

                    <div className="contactPageFormInputBoxHome">
                        <label className="contactFormInputLabelHome">Message:</label>
                        <input name='message' type="textarea" className="contactFormInputTextareaHome" required placeholder="Enter your message"/>
                    </div>

                    <button type='submit' className="contactPageFormSubmitHome">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPageContactSection