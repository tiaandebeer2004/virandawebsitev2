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
          <h2 className="singleServiceOurPackagesHeading">Our Packages</h2>  
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For businesses that need a basic package.</p>

            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R10 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For businesses that need a standard package.</p>

            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R10 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </div>

          <div className='singleServicePackage'>
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For businesses that need a premium package.</p>

            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>
            <p className="singleServicePackageFeature">Feature 1</p>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R10 000+</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
          </div>

        </div>

        <div className="backgroundThing"></div>
      
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