import { useState } from 'react'
import '../components/CSS/ServicesPageServices.css'
import useWindowDimensions from './Hooks/useWindowDimensions'

function ServicesPageServices() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();
  
  
if (width < 1100) {
  return (
    <div className="ServicesPageServices">
        <div className="servicesPageServiceMobile">
            <div className="servicesPageMobileImage"></div>

            <h2 className="servicesPageMobileHeading">WEBSITE DEVELOPMENT</h2>
            <p className="servicesPageMobileParagraph">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>
        
        <div className="servicesPageServiceMobile">
            <div className="servicesPageMobileImage"></div>

            <h2 className="servicesPageMobileHeading">GRAPHIC DESIGN</h2>
            <p className="servicesPageMobileParagraph">Your brand deserves to stand out. Our graphic design team creates stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <br></br><br></br>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>
    </div>
  )
} else {
  return (
    <div className="ServicesPageServices">

        <div className="servicesPageServiceFromRight">
            <div className="servicesPageServiceFromRightImage"></div>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">WEBSITE DEVELOPMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromLeft">
            <div className="servicesPageServiceFromLeftImage"></div>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">GRAPHIC DESIGN</h2>
                <p className="servicesPageServiceFromLeftParagraph">Your brand deserves to stand out. Our graphic design team creates stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <br></br><br></br>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromRight">
            <div className="servicesPageServiceFromRightImage"></div>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">SOCIAL MEDIA MANAGEMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">Posting great content, but getting no results? We create social media strategies that not only help you grow your following, but also turns your existing followers into loyal customers. <br></br><br></br>Which platform should you use? What kind of content should you post? Contact us and have our social media management team answer all your questions and create a strategy that works.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromLeft">
            <div className="servicesPageServiceFromLeftImage"></div>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">SOCIAL MEDIA<br></br>CONTENT CREATION</h2>
                <p className="servicesPageServiceFromLeftParagraph">Don’t have the time to post on social media? We create scroll-stopping social media content with a focus on growing your brand and driving sales. Our excellent social media team stays up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there. <br></br><br></br>Focus on running your business – while we focus on growing it.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromRight">
            <div className="servicesPageServiceFromRightImage"></div>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">GOOGLE ADS MANAGEMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">We offer the best web design services in Port Elizabeth for a good price and that.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromLeft">
            <div className="servicesPageServiceFromLeftImage"></div>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">FACEBOOK ADS MANAGEMENT</h2>
                <p className="servicesPageServiceFromLeftParagraph">We offer the best web design services in Port Elizabeth for a good price and that.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromRight">
            <div className="servicesPageServiceFromRightImage"></div>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">AD CREATION</h2>
                <p className="servicesPageServiceFromRightParagraph">We offer the best web design services in Port Elizabeth for a good price and that.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
        </div>

        <div className="servicesPageServiceFromLeft">
            <div className="servicesPageServiceFromLeftImage"></div>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">APP DEVELOPMENT</h2>
                <p className="servicesPageServiceFromLeftParagraph">We offer the best web design services in Port Elizabeth for a good price and that.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
        </div>

    </div>
  )
}

}

export default ServicesPageServices