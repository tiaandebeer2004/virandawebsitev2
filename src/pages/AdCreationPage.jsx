import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function AdCreationPage() {
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
        <h1 className="singleServiceHeading">AD CREATION</h1>
        <p className="singleServiceSubheading">Know how to run targeted, optimized ad campaigns, but don’t have the material to use? <br></br><br></br>Our Ad Creators specialize in creating aesthetically stunning, high converting ads that help you save money on ad spend, generate higher quality leads, and make more sales.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR AD CREATION PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get stunning, engaging, and high-converting ads.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to start their advertising journey in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">2 image ads</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic editing</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimized for conversion</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free copywriting</p></div>
            
            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R1 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to optimize their online advertisements.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">1 video ad</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic editing</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimized for conversion</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free copywriting</p></div>
          
            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R2 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need highly-optimized advertising.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">1 video ad</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Remote or on-site</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Advanced editing</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Optimized for conversion</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free copywriting</p></div>
          
            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R3 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">WASTING MONEY ON BAD ADS?</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Running paid ads isn't just about getting views - it's about getting sales. Bad ads blend into the vast ocean of competition, while good ads can stop the scroll, get clicks, and most importantly, get sales. The difference between these? Strategic creative material that's designed to convert viewers into loyal customers.<br></br><br></br>At Viranda, we've mastered the art of ad creation. From eye-catching visuals to high-converting copy, we've optimized every part of the ad creation process - ensuring that your ads get results, get sales, and don't waste your hard-earned money.</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED A PROFESSIONAL AD CREATION TEAM:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">We know, you can throw together some basic copy and designs yourself. But without careful optimization and years of experience, your ads won't work. The paid ads industry is full of DIY ads, and a professional ad creation team is the only way yours will stand out above the crowd.<br></br><br></br>Bad ads don't convert, hurt your brand's image, and don't turn a profit, and a professional ad creation team is absolutely necessary to avoid wasting your valuable time and money.</p>
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
          <p className="singleServiceBlogSubheading">We understand that your ads shouldn't just get clicks - they should get customers. We value integrity, and we tailor your ads to get conversions that are good for your business, not clicks that are good for our portfolio page. <br></br>Here's what makes us different:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
              <span className="extraSpacing"><br></br></span> We value transparency, honesty, and excellence. You'll always know the reasons behind every one of our ad creation decisions.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;STRATEGIC COPYWRITING:</span><span className="extraSpacing"><br></br></span>
              Our copywriters are involved in every ad we create, ensuring that your copy actually gets customers instead of just quick clicks.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;PROFESSIONAL DESIGN:</span><span className="extraSpacing"><br></br></span>
              Our professional designers and videographers ensure that every ad looks polished, professional and eye-catching.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;AD TESTING:</span><span className="extraSpacing"><br></br></span>
              We provide you with multiple ads - so that you can test a variety of options and find out which one gets the best results.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;PLATFORM OPTIMIZATION:</span><span className="extraSpacing"><br></br></span>
              We tailor every ad to the platform it will be advertised on, ensuring that we follow the best practices and get you the best results for that specific platform.</p>
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
We have a conversation with you discussing your business, audience, and what you want to achieve from your ads.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;CONCEPTUALIZATION:</span><span className="extraSpacing"><br></br></span>
We generate ideas and create the first draft of your ads.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;REVIEW:</span><span className="extraSpacing"><br></br></span>
We have another conversation with you discussing what you like, what you don't like, and which ads you believe represent your business the best.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;POLISH:</span><span className="extraSpacing"><br></br></span>
We adapt and polish the ads according to the review, and repeat the process as necessary.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;DELIVERY:</span><span className="extraSpacing"><br></br></span>
We send the polished ads to you in high-resolution, along with some professional advice on how and where to use these ads.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">READY TO SCALE WITH PROFESSIONAL ADS?</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Your ads shouldn't just get views - they should get customers. We're ready to grow your business, are you.</p>
        </motion.div>
        
        <div className="singleServiceBlogButtonWrapper spacingBelow">
            <button className="singleServiceBlogButton">Get a Free Consultation</button>
        </div> 
      </div>  
      </div>

      <Footer></Footer>
    </div>
  )
}

export default AdCreationPage