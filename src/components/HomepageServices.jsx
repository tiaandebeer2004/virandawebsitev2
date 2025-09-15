import { useRef, useEffect, useState } from 'react'
import './CSS/HomepageServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function HomepageServices() {
  const [count, setCount] = useState(0)
  const [toggleServicesState, setServicesState] = useState(0);

    const toggleServices = (value) => {
        setServicesState(value);
    }
  
    return (
      <>
        <div className="HomepageServices">
            <h2 className="homepageOurServices">OUR SERVICES</h2>

            <div className={toggleServicesState === 0 ? "homepageService" : "homepageServiceBlock homepageHidden"}>
                <FontAwesomeIcon className="homepageChevronLeft" icon={faChevronLeft} onClick={() => toggleServices(3)}/>

                <div className="homepageServiceBlock">
                    <h3 className="homepageServiceBlockHeading">WEB DEVELOPMENT</h3>  

                    <div className="homepageServiceBlockColumns">
                        <div className="homepageServiceLeft">
                            <p className="homepageServiceCopy">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
                        </div>

                        <div className="homepageServiceRight">

                        </div>
                    </div>

                    <button className="homepageServiceView">VIEW SERVICE</button>
                </div>

                <FontAwesomeIcon className="homepageChevronRight" icon={faChevronRight} onClick={() => toggleServices(1)}/>
            </div>

            <div className={toggleServicesState === 1 ? "homepageService" : "homepageServiceBlock homepageHidden"}>
                <FontAwesomeIcon className="homepageChevronLeft" icon={faChevronLeft} onClick={() => toggleServices(0)}/>

                <div className="homepageServiceBlock">
                    <h3 className="homepageServiceBlockHeading">GOOGLE/META ADS MANAGEMENT</h3>  

                    <div className="homepageServiceBlockColumns">
                        <div className="homepageServiceLeft">
                            <p className="homepageServiceCopy">This is example copy for the homepage service section.</p>
                        </div>

                        <div className="homepageServiceRight">

                        </div>
                    </div>

                    <button className="homepageServiceView">VIEW SERVICE</button>
                </div>

                <FontAwesomeIcon className="homepageChevronRight" icon={faChevronRight} onClick={() => toggleServices(2)}/>
            </div>

            <div className={toggleServicesState === 2 ? "homepageService" : "homepageServiceBlock homepageHidden"}>
                <FontAwesomeIcon className="homepageChevronLeft" icon={faChevronLeft} onClick={() => toggleServices(1)}/>

                <div className="homepageServiceBlock">
                    <h3 className="homepageServiceBlockHeading">GRAPHIC DESIGN</h3>  

                    <div className="homepageServiceBlockColumns">
                        <div className="homepageServiceLeft">
                            <p className="homepageServiceCopy">Your brand deserves to stand out. Our graphic design team creates stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <br></br><br></br>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>
                        </div>

                        <div className="homepageServiceRight">

                        </div>
                    </div>

                    <button className="homepageServiceView">VIEW SERVICE</button>
                </div>

                <FontAwesomeIcon className="homepageChevronRight" icon={faChevronRight} onClick={() => toggleServices(3)}/>
            </div>

            <div className={toggleServicesState === 3 ? "homepageService" : "homepageServiceBlock homepageHidden"}>
                <FontAwesomeIcon className="homepageChevronLeft" icon={faChevronLeft} onClick={() => toggleServices(2)}/>

                <div className="homepageServiceBlock">
                    <h3 className="homepageServiceBlockHeading">SOCIAL MEDIA MANAGEMENT/CONTENT CREATION</h3>  

                    <div className="homepageServiceBlockColumns">
                        <div className="homepageServiceLeft">
                            <p className="homepageServiceCopy">Don’t have the time to post on social media? We create scroll-stopping social media content with a focus on growing your brand and driving sales. Our excellent social media team stays up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there. <br></br><br></br>Focus on running your business – while we focus on growing it.</p>
                        </div>

                        <div className="homepageServiceRight">

                        </div>
                    </div>

                    <button className="homepageServiceView">VIEW SERVICE</button>
                </div>

                <FontAwesomeIcon className="homepageChevronRight" icon={faChevronRight} onClick={() => toggleServices(0)}/>
            </div>
        </div>
      </>
    )
  }

export default HomepageServices