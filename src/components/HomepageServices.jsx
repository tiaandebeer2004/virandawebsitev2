import { useRef, useEffect, useState } from 'react'
import './CSS/HomepageServices.css'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function HomepageServices() {
  const [count, setCount] = useState(0)
  const [toggleServicesState, setServicesState] = useState(0);
  const { width, height } = useWindowDimensions();

    const toggleServices = (value) => {
        setServicesState(value);
    }

if (width < 800) {
    return (
      <>
        <div className="HomepageServices">
            <h2 className="homepageOurServices">OUR SERVICES</h2>

            <div className="homepageServicesBentoColumns">
                <div className="bentoTopLeft">            
                    <h3 className="homepageServiceHeadingBig">LEVEL UP YOUR MARKETING,<br></br>LEVEL UP YOUR BUSINESS:</h3>
                    <p className="homepageServiceParagraphBig">We help businesses grow through targeted Google & Facebook Ads, custom web development, and impactful social media management—plus a full range of digital marketing services designed to get you real results. We're ready to help you grow, scale, and build the business of your dreams.</p>
                </div>

                    <div className="bentoTopRight">
                        <div className="bentoTopRightTop">
                            <div className="bentoTopRightLeft">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-google" />
                                </div>

                                <h3 className="homepageServiceHeading black">WEBSITE DEVELOPMENT:</h3>
                                <p className="homepageServiceParagraph black">Websites that not only look beautiful – they actually get sales.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightRight redBG">
                                <div className="bentoLogos">
                                    
                                </div>

                                <h3 className="homepageServiceHeading">GRAPHIC DESIGN:</h3>
                                <p className="homepageServiceParagraph">Graphics that people don't just see, but remember.</p>
                                <button className="homepageServicesServiceButton whiteButton">Learn More</button>    
                            </div>
                        </div>

                        <div className="bentoTopRightBottom">
                            <div className="bentoTopRightBottomLeft">
                                <div className="bentoLogos">
                                    
                                </div>

                                <h3 className="homepageServiceHeading black">SOCIAL MEDIA MANAGEMENT:</h3>
                                <p className="homepageServiceParagraph black">Grow your following and turn your existing followers into loyal customers.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightBottomRight redBG">
                                <div className="bentoLogos">
                                    
                                </div>

                                <h3 className="homepageServiceHeading">SOCIAL MEDIA CONTENT CREATION:</h3>
                                <p className="homepageServiceParagraph">Content that doesn't just get likes - it gets sales.</p>
                                <button className="homepageServicesServiceButton whiteButton">Learn More</button>
                            </div>
                        </div>
                    </div>
                

            
                <div className="bentoTopRight">
                        <div className="bentoTopRightTop">
                            <div className="bentoTopRightLeft">
                                <div className="bentoLogos">

                                </div>

                                <h3 className="homepageServiceHeading black">WEBSITE DEVELOPMENT:</h3>
                                <p className="homepageServiceParagraph black">Websites that not only look beautiful – they actually get sales.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightRight redBG">
                                <div className="bentoLogos">
                                   
                                </div>

                                <h3 className="homepageServiceHeading">GRAPHIC DESIGN:</h3>
                                <p className="homepageServiceParagraph">Graphics that people don't just see, but remember.</p>
                                <button className="homepageServicesServiceButton whiteButton">Learn More</button>    
                            </div>
                        </div>

                        <div className="bentoTopRightBottom">
                            <div className="bentoTopRightBottomLeft">
                                <div className="bentoLogos">
                                    
                                </div>

                                <h3 className="homepageServiceHeading black">SOCIAL MEDIA MANAGEMENT:</h3>
                                <p className="homepageServiceParagraph black">Grow your following and turn your existing followers into loyal customers.</p>
                                <button className="homepageServicesServiceButton">Learn More</button>
                            </div>

                            <div className="bentoTopRightBottomRight redBG">
                                <div className="bentoLogos">
                                    
                                </div>

                                <h3 className="homepageServiceHeading">SOCIAL MEDIA CONTENT CREATION:</h3>
                                <p className="homepageServiceParagraph">Content that doesn't just get likes - it gets sales.</p>
                                <button className="homepageServicesServiceButton whiteButton">Learn More</button>
                            </div>
                        </div>
                </div>
            </div>

                <div className="bentoBottom">
                    <div className="bentoBottomSingle">
                        <h3 className="homepageServiceHeading black">GOOGLE ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph black">Get seen by the right customers at the right time.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle redBG">
                        <h3 className="homepageServiceHeading">META/FACEBOOK ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph">Stop boosting posts, start running campaigns that actually convert.</p>
                        <button className="homepageServicesServiceButton whiteButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle">
                        <h3 className="homepageServiceHeading black">AD<br></br>CREATION:</h3>
                        <p className="homepageServiceParagraph black">Less money spent on ads, higher quality leads, and more sales.</p>
                        <button className="homepageServicesServiceButton">VIEW SERVICE</button>
                    </div>

                    <div className="bentoBottomSingle redBG">
                        <h3 className="homepageServiceHeading">SEARCH ENGINE OPTIMIZATION:</h3>
                        <p className="homepageServiceParagraph">Attract qualified traffic, and generate more leads.</p>
                        <button className="homepageServicesServiceButton whiteButton">VIEW SERVICE</button>
                    </div>
                </div>
            </div>
      </>
    )
} else {
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
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-react" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-wordpress" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-html5" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-css" />
                                </div>

                                <h3 className="homepageServiceHeading black">WEBSITE DEVELOPMENT:</h3>
                                <p className="homepageServiceParagraph black">Websites that not only look beautiful – they actually get sales.</p>
                                <button className="homepageServicesServiceButton">View More</button>
                            </div>

                            <div className="bentoTopRightRight redBG">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon="fa-solid fa-pen" />
                                </div>

                                <h3 className="homepageServiceHeading">GRAPHIC DESIGN:</h3>
                                <p className="homepageServiceParagraph">Graphics that people don't just see, but remember.</p>
                                <button className="homepageServicesServiceButton whiteButton">View More</button>    
                            </div>
                        </div>

                        <div className="bentoTopRightBottom">
                            <div className="bentoTopRightBottomLeft">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-facebook" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-instagram" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-youtube" />
                                    <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-tiktok" />
                                </div>

                                <h3 className="homepageServiceHeading black">SOCIAL MEDIA MANAGEMENT:</h3>
                                <p className="homepageServiceParagraph black">Grow your following and turn your existing followers into loyal customers.</p>
                                <button className="homepageServicesServiceButton">View More</button>
                            </div>

                            <div className="bentoTopRightBottomRight redBG">
                                <div className="bentoLogos">
                                    <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-facebook" />
                                    <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-instagram" />
                                    <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-youtube" />
                                    <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-tiktok" />
                                </div>

                                <h3 className="homepageServiceHeading">SOCIAL MEDIA CONTENT CREATION:</h3>
                                <p className="homepageServiceParagraph">Content that doesn't just get likes - it gets sales.</p>
                                <button className="homepageServicesServiceButton whiteButton">View More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bentoBottom">
                    <div className="bentoBottomSingle">
                        <div className="bentoLogos">
                            <FontAwesomeIcon className='bentoLogo black' icon="fa-brands fa-google" />
                        </div>

                        <h3 className="homepageServiceHeading black">GOOGLE ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph black">Get seen by the right customers at the right time.</p>
                        <button className="homepageServicesServiceButton">View More</button>
                    </div>

                    <div className="bentoBottomSingle redBG">
                        <div className="bentoLogos">
                            <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-meta" />
                            <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-facebook" />
                        </div>

                        <h3 className="homepageServiceHeading">META/FACEBOOK ADS MANAGEMENT:</h3>
                        <p className="homepageServiceParagraph">Stop boosting posts, start running campaigns that actually convert.</p>
                        <button className="homepageServicesServiceButton whiteButton">View More</button>
                    </div>

                    <div className="bentoBottomSingle">
                        <div className="bentoLogos">
                            <FontAwesomeIcon className='bentoLogo black' icon="fa-solid fa-camera" />
                        </div>

                        <h3 className="homepageServiceHeading black">AD<br></br>CREATION:</h3>
                        <p className="homepageServiceParagraph black">Less money spent on ads, higher quality leads, and more sales.</p>
                        <button className="homepageServicesServiceButton">View More</button>
                    </div>

                    <div className="bentoBottomSingle redBG">
                        <div className="bentoLogos">
                            <FontAwesomeIcon className='bentoLogo' icon="fa-brands fa-google" />
                        </div>

                        <h3 className="homepageServiceHeading">SEARCH ENGINE OPTIMIZATION:</h3>
                        <p className="homepageServiceParagraph">Attract qualified traffic, and generate more leads.</p>
                        <button className="homepageServicesServiceButton whiteButton">View More</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

}

export default HomepageServices