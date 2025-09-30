import { useRef, useEffect, useState } from 'react'
import './CSS/HomepageServices.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function HomepageServices() {
  const [count, setCount] = useState(0)
  const [toggleServicesState, setServicesState] = useState(0);
  const { width, height } = useWindowDimensions();

    const toggleServices = (value) => {
        setServicesState(value);
    }

    return (
      <>
        <div className="HomepageServices">
            <h2 className="homepageOurServices">OUR SERVICES</h2>

            <div className="homepageServicesBentoColumns">
                <div className="bentoTop">
                    <div className="bentoTopLeft">
                        <h3 className="homepageServiceHeadingBig">LEVEL UP YOUR MARKETING,<br></br>LEVEL UP YOUR BUSINESS:</h3>
                        <p className="homepageServiceParagraphBig">We help businesses grow through targeted Google & Facebook Ads, custom web development, and impactful social media management—plus a full range of digital marketing services designed to get you real results. We're ready to help you grow, scale, and build the business of your dreams.</p>
                    </div>

                    <div className="bentoTopRight">
                        <div className="bentoTopRightTop">
                            <div className="bentoTopRightLeft">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                </div>

                                <h3 className="homepageServiceHeading">WEBSITE DEVELOPMENT:</h3>
                                <p className="homepageServiceParagraph">Websites that not only look beautiful – they actually get sales.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightRight">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                </div>

                                <h3 className="homepageServiceHeading black">GRAPHIC DESIGN:</h3>
                                <p className="homepageServiceParagraph black">Graphics that people don't just see, but remember.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>    
                            </div>
                        </div>

                        <div className="bentoTopRightBottom">
                            <div className="bentoTopRightBottomLeft">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                </div>

                                <h3 className="homepageServiceHeading black">SOCIAL MEDIA MANAGEMENT:</h3>
                                <p className="homepageServiceParagraph black">Grow your following and turn your existing followers into loyal customers.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightBottomRight">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                    <FontAwesomeIcon className='bentoLogo' icon={faPhone} />
                                </div>

                                <h3 className="homepageServiceHeading">SOCIAL MEDIA CONTENT CREATION:</h3>
                                <p className="homepageServiceParagraph">Content that doesn't just get likes - it gets sales.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bentoBottom">
                    <div className="bentoBottomSingle redBG2">
                        <h3 className="homepageServiceHeading">GOOGLE ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph">Get seen by the right customers at the right time.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle">
                        <h3 className="homepageServiceHeading black">META/FACEBOOK ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph black">Stop boosting posts, start running campaigns that actually convert.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle redBG">
                        <h3 className="homepageServiceHeading">AD<br></br>CREATION:</h3>
                        <p className="homepageServiceParagraph">Less money spent on ads, higher quality leads, and more sales.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle">
                        <h3 className="homepageServiceHeading black">SEARCH ENGINE OPTIMIZATION:</h3>
                        <p className="homepageServiceParagraph black">Attract qualified traffic, and generate more leads.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>
                </div>
            </div>

            <div className="homepageServicesColumns">
                <div className="homepageService">
                    <h3 className="homepageServiceHeading">WEBSITE DEVELOPMENT:</h3>
                    <p className="homepageServiceParagraph">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our proven layouts convert, and we offer SEO services to help your website rank on Google.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>

                <div className="homepageService">
                    <h3 className="homepageServiceHeading">GRAPHIC DESIGN:</h3>
                    <p className="homepageServiceParagraph">Your brand deserves to stand out. Our graphic design team creates stunning, high-converting graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>

                <div className="homepageService">
                    <h3 className="homepageServiceHeading">SOCIAL MEDIA MANAGEMENT:</h3>
                    <p className="homepageServiceParagraph">Posting great content, but getting no results? We create social media strategies that not only help you grow your following, but also turns your existing followers into loyal customers.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>
            </div>

            <div className="homepageServicesColumns">
                <div className="homepageService">
                    <h3 className="homepageServiceHeading">SOCIAL MEDIA CONTENT CREATION:</h3>
                    <p className="homepageServiceParagraph">Don’t have the time to post on social media? Our excellent social media team ensures that your business stays up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>

                <div className="homepageService">
                    <h3 className="homepageServiceHeading">GOOGLE ADS MANAGEMENT:</h3>
                    <p className="homepageServiceParagraph">Our Google Ad campaigns ensure that you’re seen by the right customers at the right time. Our optimized, targeted ad campaigns drive real results – more interested, qualified leads, more sales, and a higher return on investment.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>

                <div className="homepageService">
                    <h3 className="homepageServiceHeading">META/FACEBOOK ADS MANAGEMENT:</h3>
                    <p className="homepageServiceParagraph">Stop boosting posts and start running campaigns that actually convert. We use precise targeting and eye-catching graphic material, and our Meta/Facebook ad campaigns focus on generating interested, qualified leads and driving sales.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>
            </div>

            <div className="homepageServicesColumns spaceEvenly">
                <div className="homepageService">
                    <h3 className="homepageServiceHeading">AD CREATION:</h3>
                    <p className="homepageServiceParagraph">Know how to run targeted, optimized ad campaigns, but don’t have the material to use? Our Ad Creation team specializes in creating aesthetically stunning, high converting ads that help you save money on ad spend, generate higher quality leads, and make more sales.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>

                <div className="homepageService">
                    <h3 className="homepageServiceHeading">SEARCH ENGINE OPTIMIZATION:</h3>
                    <p className="homepageServiceParagraph">Our SEO services help your business rank for valuable keywords, attract qualified traffic, and generate more leads. From keyword research to link building, we use proven strategies to ensure your business is as visible as it can be and ensure long-term results.</p>
                    <button className="homepageServicesServiceButton">Learn More</button>
                </div>
            </div>
        </div>
      </>
    )
}

export default HomepageServices