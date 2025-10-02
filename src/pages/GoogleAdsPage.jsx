import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function GoogleAdsPage() {
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
        <h1 className="singleServiceHeading">GOOGLE AD<br></br>MANAGEMENT</h1>
        <p className="singleServiceSubheading">Our Google Ad campaigns ensure that you’re seen by the right customers at the right time. <br></br><br></br>Our optimized, targeted ad campaigns drive real results – more interested, qualified leads, more sales, and a higher return on investment.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR GOOGLE ADS PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get a Google Ads strategy that works.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to start their advertising journey in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>1 Google Ad setup</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Custom, effective strategy</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>No lock-ins</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Monthly monitoring</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Basic monthly result reports</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R500/M + AD SPEND</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to optimize their online advertising.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>2 Google Ads setup and tested</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Custom, effective strategy</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>No lock-ins</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Bi-monthly monitoring</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Detailed monthly results report</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R1 000/M + AD SPEND</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need a highly-optimized Google Ads strategy.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Complimentary landing page</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>4 Google Ads setup and tested</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Custom, effective strategy</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>No lock-ins</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>Weekly monitoring</p>
            <p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/>comprehensive monthly result reports</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R2 000 + AD SPEND</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">TURNING SEARCHES INTO SALES:</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Picture this: a potential customer is searching for your products/services on Google. Who do they see - you, or your competitors? Your Google Ads strategy can make or break your business. A bad ad strategy wastes your money, harms your brand, and doesn't get results, while a good strategy can mean increasing your revenue tenfold.<br></br><br></br>At Viranda, your Google Ads don't just show up - they get results. We use highly specific and optimized targeting to ensure you get the maximum amount of leads, and that these leads are high-quality and quote-ready.</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED GOOGLE ADS MANAGEMENT:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">The Google Ads platform is extremely powerful, but it's also extremely competitive. If you try and set up your own ad campaign with little to no experience, your ads will get demolished by the competition and your money will be wasted. Incorrect targeting can also lead to you getting leads that are not interested in your services, or live outside of your service areas.<br></br><br></br>That's why you need a professional Google Ads Management team like Viranda to manage your Google Ads. We know exactly how Google Ads work and how to get results - and our proven strategies ensure relevant, high-quality, and quote-ready leads.</p>
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
          <p className="singleServiceBlogSubheading">We're not and agency that "sets and forgets it," we're constantly optimizing and improving our Google Ads campaigns. <br></br>Here's what makes us different:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
We value transparency, honesty, and excellence. You'll always have access to your Google Ads manager so that you can see exactly what we're doing and what results we're bringing in.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;TESTING:</span><span className="extraSpacing"><br></br></span>
We A/B test multiple ad campaigns, so that we can focus on the ads that bring in the best results.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OPTIMIZATION:</span><span className="extraSpacing"><br></br></span>
We're constantly optimizing our ad campaigns, ensuring you get the best return on ad spend.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CONVERSION-BASED:</span><span className="extraSpacing"><br></br></span>
Our ads don't just get clicks, they get customers.
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
We have a conversation with you discussing your business, target audience, and what you want to achieve from Google Ads.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;SETUP:</span><span className="extraSpacing"><br></br></span>
We set up and start running your ad campaigns.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;TESTING:</span><span className="extraSpacing"><br></br></span>
We decide which ad campaign is bringing in the best results, and dedicate the ad spend to that ad.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;OPTIMIZATION:</span><span className="extraSpacing"><br></br></span>
We tweak and optimize your ad campaign over time, improving your amount of leads, lead quality, and return on ad spend.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;REPORTING:</span><span className="extraSpacing"><br></br></span>
We provide monthly result reports detailing the results your ad campaigns have been getting.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">READY TO START RUNNING ADS THAT WORK?</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">A great Google Ads strategy can be your top salesperson. We're ready to help you create something that works.</p>
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

export default GoogleAdsPage