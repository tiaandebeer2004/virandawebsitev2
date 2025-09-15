import { useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function WebDesignPage() {
  const [count, setCount] = useState(0)

  return (
    <div className="WebDesignPage">
      <Navbar></Navbar>
      
      <div className="singleServicePageBanner">
        <h1 className="singleServiceHeading">WEBSITE<br></br>DEVELOPMENT</h1>
        <p className="singleServiceSubheading">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR PACKAGES</h2>  
        </div>

        <div className="singleServiceColumns">
          <motion.div
            className='singleServicePackage'
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0, ease: 'easeOut'}}
          >
            <h3 className="singleServicePackageHeading">BASIC<br></br>PACKAGE:</h3>
            <p className="singleServicePackageSubheading">R000 - R100</p>
            <p className="singleServicePackageSubheading">Example copy.</p>

            <p className="singleServicePackageFeature">- Feature 1</p>
            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </motion.div>

          <motion.div
            className='singleServicePackageMiddle'
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
          >
            <h3 className="singleServicePackageHeading">STANDARD<br></br>PACKAGE:</h3>
            <p className="singleServicePackageSubheading">R000 - R100</p>
            <p className="singleServicePackageSubheading">Example copy.</p>

            <p className="singleServicePackageFeature">- Feature 1</p>
            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </motion.div>

          <motion.div
            className='singleServicePackage'
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2, ease: 'easeOut'}}
          >
            <h3 className="singleServicePackageHeading">PREMIUM<br></br>PACKAGE:</h3>
            <p className="singleServicePackageSubheading">R000 - R100</p>
            <p className="singleServicePackageSubheading">Example copy.</p>

            <p className="singleServicePackageFeature">- Feature 1</p>
            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </motion.div>

        </div>
      
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">ABOUT WEBSITE DEVELOPMENT:</h2>  
        </div>


        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceSubheading spacingBelow">Losing customers to an outdated website? Our modern, mobile-friendly websites not only look beautiful – they actually get sales. Our layouts have been proven to drive conversion rates, and we offer premium SEO services to help your website rank on Google. <br></br><br></br>Whether you need a simple landing page or a full-blown online store, we’ll make sure your website brings the results your business deserves.</p>
        </motion.div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default WebDesignPage