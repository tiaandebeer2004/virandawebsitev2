import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function SEOPage() {
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
        <h1 className="singleServiceHeading">SEARCH ENGINE<br></br>OPTIMIZATION</h1>
        <p className="singleServiceSubheading">Our SEO services help your business rank for valuable keywords, attract qualified traffic, and generate more leads. <br></br><br></br>From keyword research to link building, we use proven strategies to ensure your business is as visible as it can be and ensure long-term results.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR SEO PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get your website on the front page of Google.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to start their SEO journey in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimize core pages</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Competition analysis</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Website & backlinks review</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Keyword research & usage</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">On-page optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Link building</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Google Analytics and Search Console setup</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Schema Implementation</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic monthly result reports</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Perfect for businesses looking to start improving their search engine rankings</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R1 000/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to improve their rankings.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimize all pages</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free Google my Business profile setup</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Competition analysis</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Website & backlinks review</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Keyword research & usage</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">On-page optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Link building</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Google Analytics and Search Console setup</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Schema Implementation</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Detailed monthly result reports</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R2 000/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need to be in Google's top results.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimize all pages + add new pages</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free Google my Business profile setup and optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Competition analysis</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Website & backlinks review</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Keyword research & usage</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">On-page optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Link building</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Google Analytics and Search Console setup</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Schema Implementation</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Comprehensive monthly result reports</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R3 000/M</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">GET FOUND. STAY AHEAD:</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">When someone searches for your product or service on Google, what do they find? Is it you, or is it your competitors?<br></br><br></br>At Viranda, we understand that a beautiful website means nothing if it's not getting traffic, and we offer premium SEO services to make sure that your website ranks for the right keywords, and potential customers come to you instead of you having to go to them.
</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED A PROFESSIONAL SEO TEAM:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">In the digital age, everyone's online. Not ranking well is like having a store hidden in the back of a building with no sign, while ranking on the first page is like having a big store in a popular mall. Do-it-yourself SEO strategies like just stuffing in a bunch of keywords don't work anymore - you need a professional SEO team that understands the Google search algorithm, and how to rank on it.</p>
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
          <p className="singleServiceBlogSubheading">We don't use the same basic, cookie-cutter SEO strategies that everyone else uses. Our strategies will get you ranking above your competitors - here's what we do differently:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
              <span className="extraSpacing"><br></br></span> We value transparency, honesty, and excellence - you'll always know what we're doing, and what results it's bringing in.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUT OF THE BOX THINKING:</span><span className="extraSpacing"><br></br></span>
              If we were to use the same SEO strategies everyone else is using, it's obviously unrealistic to expect that you will rank higher than them. That's why we use creative, unique strategies that beat the competition.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;LASTING RESULTS:</span><span className="extraSpacing"><br></br></span>
              We don't use quick fixes, our SEO strategies are optimized to keep you ranking forever.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OPTIMIZATION:</span><span className="extraSpacing"><br></br></span>
              We don't just "set it and forget it" - we're constantly looking for ways to improve and optimize your SEO strategy.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CUSTOM STRATEGIES:</span><span className="extraSpacing"><br></br></span>
              We tailor our SEO strategies to every niche and business, ensuring that you rank for the best keywords relating to your field.
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
We have a conversation with you discussing your target audience, your business, and what you want from SEO.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;STRATEGY:</span><span className="extraSpacing"><br></br></span>
We build a tailor-made SEO strategy to suit your business' needs.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;IMPLEMENTATION:</span><span className="extraSpacing"><br></br></span>
We implement our SEO strategy into your website and start getting you rankings.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;OPTIMIZATION:</span><span className="extraSpacing"><br></br></span>
We check how your website is performing and ranking, and adjust our SEO strategy and implementation accordingly
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;REPORTING AND UPDATING:</span><span className="extraSpacing"><br></br></span>
We provide monthly result reports and update your website in order to ensure it stays high-ranking.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">READY TO BE SEEN?</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Our SEO services aren't just expenses - they're investments into the future of your business. We're not just getting you rankings, we're getting you long-term, scalable results.</p>
        </motion.div>
        
        <div className="singleServiceBlogButtonWrapper spacingBelow">
            <a href='/contact' className='singleServicePackageLink'><button className="singleServiceBlogButton">Get a Free Consultation</button></a>
        </div> 
      </div>  
      </div>

      <Footer></Footer>
    </div>
  )
}

export default SEOPage