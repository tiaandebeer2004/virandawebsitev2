import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function WebDesignPage() {
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
        <h1 className="singleServiceHeading">WEBSITE<br></br>DEVELOPMENT</h1>
        <p className="singleServiceSubheading">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR WEBSITE PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get a beautiful, high-converting, and SEO-friendly website.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to start their online presence in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Up to 5 pages</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free basic SEO optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">A basic, but effective design</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic functionality</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Conversion optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Perfect for small, static websites that don't need a lot of functionality</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R5 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to optimize their online presence.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Up to 10 pages</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free standard SEO optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">A standard, engaging and effective design</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Standard functionality and basic animation</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Conversion optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Perfect for websites that need some functionality</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R10 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need highly-optimized, large-scale websites or ecommerce stores.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">10+ pages or ecommerce stores</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Free advanced SEO optimization</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Advanced, highly engaging and effective design</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Advanced functionality and advanced animations</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Conversion optimization</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R15 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">WE DON'T JUST BUILD WEBSITES<br></br>WE BUILD DIGITAL EXPERIENCES</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">In the digital age, your website is the first impression potential customers get of your business. "Having a website just to have one" isn't enough anymore: your website should be your brand ambassador, your 24/7 salesperson, and your most valuable marketing tool.<br></br><br></br>At Viranda, we're not just "your website guys." Our expert web developers craft digital experiences that are fast, beatiful, and most importantly, built to convert.</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED A WEBSITE DEVELOPMENT TEAM:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">We've all heard it before: "I just used a template" or "my brother built me a website for free." But here's the truth - at a time where markets are becoming more and more competitive, "good enough" is no longer good enough.<br></br><br></br>That's why you need an agency like ours: where experienced professionals can build you a website that looks professional on all devices, ranks well on search engines, and drives users to take action - things that a template or a family member can't provide. Whether you want people to fill in contact forms, make purchases, or give you a call - our websites don't just make taking action easy, they make it hard to resist.</p>
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
          <p className="singleServiceBlogSubheading">We know the frustration that inexperienced digital marketing agencies can leave you with.<br></br>Here's what makes us different:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
              <span className="extraSpacing"><br></br></span> We value transparency, honesty and excellence, keeping you informed every step of the way while exceeding our promises. 
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CUSTOM DESIGN AND DEVELOPMENT:</span><span className="extraSpacing"><br></br></span>
              We don't build the same website for every client. Every website is custom-built to reflect your brand's identity and meet your business' needs.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;REVISIONS:</span><span className="extraSpacing"><br></br></span>
              We edit and revise your website as many times as needed - we'll never send you an invoice for something you're not 100% happy with.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;MOBILE-FIRST DESIGN:</span><span className="extraSpacing"><br></br></span>
              More than half of website visits come from phones - we ensure that your website looks good on all devices.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CONSISTENT CLIENT TREATMENT:</span><span className="extraSpacing"><br></br></span>
              Whether you're just starting out or an established business, we view you the same as we would Apple or Coca Cola, treating your business with the same love and care as we do our own.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;BUILT FOR CONVERSION:</span><span className="extraSpacing"><br></br></span>
              We understand that your website doesn't mean anything if it doesn't get sales, and we focus heavily on optimizing your conversion rate.</p>
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
              We have a conversation with you discussing what your website's design and functionality needs are and what you want to achieve through your website.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;DEVELOPMENT:</span><span className="extraSpacing"><br></br></span>
              We develop or redesign your website, ensuring it looks professional, works the way you want it to, and, most importantly, converts visitors into customers.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;REVIEW:</span><span className="extraSpacing"><br></br></span>
              We present you with your website and have another conversation with you - what you like, what you don't like, and what needs to change.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;REVISION:</span><span className="extraSpacing"><br></br></span>
              We revise your website based on the review and repeat the process as necessary.
              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;DEPLOYMENT:</span><span className="extraSpacing"><br></br></span>
              We register your domain, setup your email mailboxes, and get your website live with a seamless, professional process.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">READY TO GROW?</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Your website isn't just another project - it's a long-term investment in your brand's future. Whether you need a new website or a redesign, we're ready to help you create something that works.</p>
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

export default WebDesignPage