import { useState } from 'react'
import '../components/CSS/ContactPageContactSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function ContactPageContactSection() {
  const [count, setCount] = useState(0)

  return (
    <div className="ContactPageContactSection">
        <div className="contactPageContactSectionColumns">
            <div className="contactPageContactSectionLeft">
                <h2 className="contactPageContactSectionHeading">LET'S TALK BUSINESS</h2> 
                <p className="contactPageContactSectionParagraph">Ready to grow? You're only one step away from scaling beyond your wildest dreams.</p>
                <p className="contactPageContactSectionContactDetails">CONTACT DETAILS:</p>
                <p className="contactPageContactSectionParagraph2"><FontAwesomeIcon className="contactPageIcon" icon={faPhone} />&nbsp;&nbsp;065 946 2507 / 082 216 1042</p>
                <p className="contactPageContactSectionParagraph2"><FontAwesomeIcon className="contactPageIcon" icon={faEnvelope} />&nbsp;&nbsp;tiaan@viranda.co.za / cayden@viranda.co.za</p>
            </div>

            <div className="contactPageContactSectionRight">
                <form className="contactPageForm" action="https://api.web3forms.com/submit" method='POST'>
                    <h2 className="contactPageFormHeading">SEND US A MESSAGE:</h2>

                    <input type="hidden" name="access_key" value="ffcb9a0c-8cfd-424b-aff4-40e2ee148b6c"/>

                    <div className="contactPageFormInputBox">
                        <label className="contactFormInputLabel">Name:</label>
                        <input name='name' type="text" className="contactFormInput" placeholder="Enter your name"/>
                    </div>

                    <div className="contactPageFormInputBox">
                        <label className="contactFormInputLabel">Phone Number:</label>
                        <input name='phoneNumber' type="number" className="contactFormInput" required placeholder="Enter your phone number"/>
                    </div>

                    <div className="contactPageFormInputBox">
                        <label className="contactFormInputLabel">Message:</label>
                        <input name='message' type="textarea" className="contactFormInputTextarea" required placeholder="Enter your message"/>
                    </div>

                    <button type='submit' className="contactPageFormSubmit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPageContactSection