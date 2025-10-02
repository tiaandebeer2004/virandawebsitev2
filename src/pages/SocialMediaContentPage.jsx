import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function SocialMediaContentPage() {
  const [count, setCount] = useState(0)
  const singleServiceRef = useRef(null);
    const [position, setPosition] = useState({});
  
    useEffect(() => {
      const updatePosition = () => {
        if (singleServiceRef.current) {
          const rect = singleServiceRef.current.getBoundingClientRect();
          setPosition({
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        }
      };
  
      // Initial position update
      updatePosition();
  
      // Update position on scroll and resize events
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
  
      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }, []);

  return (
    <div className="WebDesignPage">
      {(position.top <= 70) ? (
              <NavbarBlack></NavbarBlack>
            ) : (
              <Navbar></Navbar>
            )}
      
      <div className="singleServicePageBanner">
        <h1 className="singleServiceHeading">SOCIAL MEDIA<br></br>CONTENT CREATION</h1>
        <p className="singleServiceSubheading">Don’t have the time to post on social media? We create scroll-stopping social media content with a focus on growing your brand and driving sales. Our excellent social media content creators stay up to date with current trends, crafting highly engaging graphics and videos that drive sales and puts your brand out there. <br></br><br></br>Focus on running your business – while we focus on growing it.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR SOCIAL MEDIA CONTENT CREATION PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get eye-catching, engaging and high-converting social media content.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to start their social media presence in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">4 image posts per month</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">2 platforms</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Posts are optimized for each platform</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Monthly monitoring</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic monthly result reports</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Perfect for businesses with no social media content that just need to get started</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R1 500/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to optimize their social media presence.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">8 image posts or 4 image and 1 video post per month</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">3 platforms</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Posts are optimized for each platform</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Weekly monitoring</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Detailed monthly result reports</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Perfect for businesses looking to start growing their social media</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R3 000/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need a highly-optimized social media presence.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">12 image posts or 8 image and 2 video posts per month</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote or on-site</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">All major platforms</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Posts are optimized for each platform</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Bi-weekly or daily monitoring</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Comprehensive monthly result reports</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free social media management</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R4 000/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">SOCIAL MEDIA THAT SELLS</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">With the rise of short-form content, you've only got a few seconds to stop a viewer's scrolling before they move on. Your content needs to capture attention, grow your business, and most importantly, drive action.<br></br><br></br>At Viranda, we ensure that your social media content not only captures attention, looks professional, and stays up to date with the current trends, but that it also serves a clear purpose - converting views into loyal customers.</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED A PROFESSIONAL SOCIAL MEDIA CONTENT CREATION TEAM:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Posting just to post doesn't cut it anymore. Badly designed template posts don't capture attention and makes your business appear unprofessional.<br></br><br></br>That's why you need a professional social media content creation team like Viranda, that can ensure your content always looks professional and up to date, grows your brand, and increases your sales.</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY VIRANDA?:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">We don't just create generic, cookie-cutter social media content. Our content is designed to fit your brand, fit your audience, and bring in more customers. Here's what makes us different:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
              <span className="extraSpacing"><br></br></span> We value transparency, honesty, and excellence - you'll always know exactly what we're doing and what to expect.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CUSTOM VISUALS:</span><span className="extraSpacing"><br></br></span>
All of our content is custom made so that your brand can stand out and have a coherent image - no templates.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CONSISTENCY:</span><span className="extraSpacing"><br></br></span>
We deliver steady, reliable content, making sure your social media accounts never go quiet.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CONVERSION-BASED:</span><span className="extraSpacing"><br></br></span>
We understand that likes mean nothing if you don't get more customers. Our content is focused on driving people to take action and buy from you.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;BRAND BUILDING:</span><span className="extraSpacing"><br></br></span>
Our content doesn't just look good, it all works together in order to build a coherent brand image for your business that people can remember and become loyal too.
              <br></br><br></br>
              </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">OUR PROCESS:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">
              <span className='spanBold'><span className='spanRed'>01</span>&nbsp;&nbsp;&nbsp;PLANNING:</span><span className="extraSpacing"><br></br></span>
We have a meeting with you discussing your target audience, business, and what you want to achieve from your social media content.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;STRATEGY:</span><span className="extraSpacing"><br></br></span>
We form an effective, engaging social media strategy around the information we get in the planning stage.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;CONTENT CREATION:</span><span className="extraSpacing"><br></br></span>
We create the actual content - engaging, eye-catching, and high-impact.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;REVIEW:</span><span className="extraSpacing"><br></br></span>
We send the content over to you to approve and revise if necessary - we'll never send you an invoice for something you're not happy with.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;DELIVERY:</span><span className="extraSpacing"><br></br></span>
We send the content to you in high-quality file formats optimized for the social media platforms you will be uploading the content on.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">READY TO GROW ON SOCIAL MEDIA?</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Your social media should stand out, capture attention, and drive action. We're ready to help you create content that doesn't just exist, it works.</p>
        </motion.div>
        
        <div className="singleServiceBlogButtonWrapper spacingBelow">
            <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServiceBlogButton">Get a Free Consultation</button></a>
        </div> 
      </div>  
      </div>

      <Footer></Footer>
    </div>
  )
}

export default SocialMediaContentPage