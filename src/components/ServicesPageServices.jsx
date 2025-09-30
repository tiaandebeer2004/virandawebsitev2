import { useState } from 'react'
import '../components/CSS/ServicesPageServices.css'
import useWindowDimensions from './Hooks/useWindowDimensions'
import Footer from './Footer'
import seoImage from '../assets/Services/seoImage.png'
import socialMediaContentCreationImage from '../assets/Services/socialMediaContentCreationImage.png'
import graphicDesignImage from '../assets/Services/graphicDesignImage.png'
import googleAdsImage from '../assets/Services/googleAdsImage.png'
import metaAdsImage from '../assets/Services/metaAdsImage.png'
import adCreationImage from '../assets/Services/adCreationImage.png'

function ServicesPageServices() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();
  
  
if (width < 900) {
  return (
    <div className="ServicesPageServices">
        <div className="servicesPageServiceMobile">
            <img src={seoImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">WEBSITE DEVELOPMENT</h2>
            <p className="servicesPageMobileParagraph">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <span className="smallerSpacing"><br></br><br></br></span>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
            
            <button className="servicesPageServiceButton">Learn More</button>
        </div>
        
        <div className="servicesPageServiceMobile">
            <img src={graphicDesignImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">GRAPHIC DESIGN</h2>
            <p className="servicesPageMobileParagraph">Your brand deserves to stand out. Our graphic design team creates stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <span className="smallerSpacing"><br></br><br></br></span>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile">
            <img src={seoImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">SOCIAL MEDIA MANAGEMENT</h2>
            <p className="servicesPageMobileParagraph">Posting great content, but getting no results? We create social media strategies that not only help you grow your following, but also turns your existing followers into loyal customers. <span className="smallerSpacing"><br></br><br></br></span>Which platform should you use? What kind of content should you post? Contact us and have our social media management team answer all your questions and create a strategy that works.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile">
            <img src={socialMediaContentCreationImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">SOCIAL MEDIA<br></br>CONTENT CREATION</h2>
            <p className="servicesPageMobileParagraph">Don’t have the time to post on social media? We create scroll-stopping social media content with a focus on growing your brand and driving sales. Our excellent social media team stays up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there. <span className="smallerSpacing"><br></br><br></br></span>Focus on running your business – while we focus on growing it.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile">
            <img src={googleAdsImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">GOOGLE ADS MANAGEMENT</h2>
            <p className="servicesPageMobileParagraph">Our Google Ad campaigns ensure that you’re seen by the right customers at the right time. Our optimized, targeted ad campaigns drive real results – more interested, qualified leads, more sales, and a higher return on investment.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile">
            <img src={metaAdsImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">META/FACEBOOK ADS MANAGEMENT</h2>
            <p className="servicesPageMobileParagraph">Stop boosting posts and start running campaigns that actually convert. Our Meta/Facebook ad campaigns focus on generating interested, qualified leads and driving sales. We use precise targeting and eye-catching graphic material – so that you can use Meta/Facebook Ads as a powerful tool for your business’ growth.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile">
            <img src={adCreationImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">AD CREATION</h2>
            <p className="servicesPageMobileParagraph">Know how to run targeted, optimized ad campaigns, but don’t have the material to use? Our Ad Creation team specializes in creating aesthetically stunning, high converting ads that help you save money on ad spend, generate higher quality leads, and make more sales.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <div className="servicesPageServiceMobile serviceLastMobile">
            <img src={seoImage} className="servicesPageMobileImage"></img>

            <h2 className="servicesPageMobileHeading">SEARCH ENGINE OPTIMIZATION</h2>
            <p className="servicesPageMobileParagraph">Our SEO services help your business rank for valuable keywords, attract qualified traffic, and generate more leads. From keyword research to link building, we use proven strategies to ensure your business is as visible as it can be and ensure long-term results.</p>
            <button className="servicesPageServiceButton">Learn More</button>
        </div>

        <Footer></Footer>
    </div>
  )
} else {
  return (
    <div className="ServicesPageServices">

    <div className="servicesPageServiceWrapper servicesPageFirstService">
        <div className="servicesPageServiceFromRight">
            <img src={seoImage} className="servicesPageServiceFromRightImage"></img>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">WEBSITE DEVELOPMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
        </div>
    </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromLeft">
            <img src={graphicDesignImage} className="servicesPageServiceFromLeftImage"></img>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">GRAPHIC DESIGN</h2>
                <p className="servicesPageServiceFromLeftParagraph">Your brand deserves to stand out. Our graphic design team creates stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <br></br><br></br>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
        </div>
    </div>

    <div className="servicesPageServiceWrapper"> 
        <div className="servicesPageServiceFromRight">
            <img src={seoImage} className="servicesPageServiceFromRightImage"></img>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">SOCIAL MEDIA MANAGEMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">Posting great content, but getting no results? We create social media strategies that not only help you grow your following, but also turns your existing followers into loyal customers. <br></br><br></br>Which platform should you use? What kind of content should you post? Contact us and have our social media management team answer all your questions and create a strategy that works.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
          </div>
        </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromLeft">
            <img src={socialMediaContentCreationImage} className="servicesPageServiceFromLeftImage"></img>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">SOCIAL MEDIA<br></br>CONTENT CREATION</h2>
                <p className="servicesPageServiceFromLeftParagraph">Don’t have the time to post on social media? We create scroll-stopping social media content with a focus on growing your brand and driving sales. Our excellent social media team stays up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there. <br></br><br></br>Focus on running your business – while we focus on growing it.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
          </div>
        </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromRight">
            <img src={googleAdsImage} className="servicesPageServiceFromRightImage"></img>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">GOOGLE ADS MANAGEMENT</h2>
                <p className="servicesPageServiceFromRightParagraph">Our Google Ad campaigns ensure that you’re seen by the right customers at the right time. Our optimized, targeted ad campaigns drive real results – more interested, qualified leads, more sales, and a higher return on investment.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
          </div>
        </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromLeft">
            <img src={metaAdsImage} className="servicesPageServiceFromLeftImage"></img>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">META/FACEBOOK ADS MANAGEMENT</h2>
                <p className="servicesPageServiceFromLeftParagraph">Stop boosting posts and start running campaigns that actually convert. Our Meta/Facebook ad campaigns focus on generating interested, qualified leads and driving sales. We use precise targeting and eye-catching graphic material – so that you can use Meta/Facebook Ads as a powerful tool for your business’ growth.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
          </div>
        </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromRight">
            <img src={adCreationImage} className="servicesPageServiceFromRightImage"></img>

            <div className="servicesPageServiceFromRightColumn">
                <h2 className="servicesPageServiceFromRightHeading">AD CREATION</h2>
                <p className="servicesPageServiceFromRightParagraph">Know how to run targeted, optimized ad campaigns, but don’t have the material to use? Our Ad Creation team specializes in creating aesthetically stunning, high converting ads that help you save money on ad spend, generate higher quality leads, and make more sales.</p>
                <button className="servicesPageServiceButton">Learn More</button>
            </div>
          </div>
        </div>

    <div className="servicesPageServiceWrapper">
        <div className="servicesPageServiceFromLeft">
            <img src={seoImage} className="servicesPageServiceFromLeftImage"></img>

            <div className="servicesPageServiceFromLeftColumn">
                <h2 className="servicesPageServiceFromLeftHeading">SEARCH ENGINE OPTIMIZATION</h2>
                <p className="servicesPageServiceFromLeftParagraph">Our SEO services help your business rank for valuable keywords, attract qualified traffic, and generate more leads. From keyword research to link building, we use proven strategies to ensure your business is as visible as it can be and ensure long-term results.</p>
                <button className="servicesPageServiceButton serviceRight">Learn More</button>
            </div>
          </div>
    </div>

        <Footer></Footer>
    </div>
  )
}

}

export default ServicesPageServices