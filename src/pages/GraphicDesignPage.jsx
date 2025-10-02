import { useRef, useEffect, useState } from 'react'
import '../components/CSS/WebDesignPage.css'
import NavbarBlack from '../components/NavbarBlack'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function GraphicDesignPage() {
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
        <h1 className="singleServiceHeading">GRAPHIC<br></br>DESIGN</h1>
        <p className="singleServiceSubheading">Your brand deserves to stand out. Our graphic designers create stunning graphics that help you stand out from the crowd, capture potential customers’ attention, and grow your business overall. <br></br><br></br>Whether you need a logo, flyers, or other marketing material, you can trust us to design the most effective visuals.</p>

      <div className="singleServiceSection2" ref={singleServiceRef}>
        <div className="singleServiceOurPackages">
          <h2 className="singleServiceOurPackagesHeading">OUR GRAPHIC DESIGN PACKAGES</h2>  
          <p className="singleServiceOurPackagesSubheading">Get stunning, effective, and memorable graphics. Graphic design is a very vast field, and we cover a full range of graphic design services that aren't listed as packages. These are just to give you an idea - contact us to make your ideas come to life.</p>
        </div>

        <div className="singleServiceColumns">
          <div className="singleServicePackage">
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">BASIC:</h3>
            <p className="singleServicePackageSubheading">For small businesses that are looking to create their first brand graphics in the right way.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Logo designs</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Basic promotional material</p></div> 
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">A large amount of design options to pick from</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R2 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackageMiddle'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">STANDARD:</h3>
            <p className="singleServicePackageSubheading">For growing businesses that are looking to create graphics beyond just a logo.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Packaging design</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Marketing material, flyers, etc.</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">A large amount of design options to pick from</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R3 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>

          <div className='singleServicePackage singleServiceLastPackage'>
            <div className="singleServicePackageTopPart">
            <h3 className="singleServicePackageHeading">PREMIUM:</h3>
            <p className="singleServicePackageSubheading">For established businesses that need a full range of graphic design services.</p>
            </div>

            <div className="singleServicePackageBottomPart">
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">All your design needs</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">Coherent concepts across all designs</p></div>
            <div className="singleServicePackageFeatureDiv"><p className="singleServicePackageFeature"><FontAwesomeIcon icon={faSquareCheck} className='singleServiceIcon'/></p><p className="singleServicePackageFeature">A large amount of design options to pick from</p></div>

            <p className="singleServicePackageFrom">FROM:</p>
            <h3 className="singleServicePackageNumber">R5 000</h3>

            <div className="singleServicePackageButtonGroup">
              <a href='/virandawebsitev2/#/contact' className='singleServicePackageLink'><button className="singleServicePackageButton">CONTACT US</button></a>
            </div>
            </div>
          </div>
        </div>

        <div className="singleServiceOurPackages spacingChangeSingleService">
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogFirstHeading">WE DON’T JUST DESIGN GRAPHICS, WE DESIGN BRANDS</h2>  
        </div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Your visuals are the language your customers understand first. The design of your logo, brand colors, and marketing materials isn’t just decorative – it’s how your customers recognize you, trust you, and remember you.<br></br><br></br>At Viranda, we don’t just make things look pretty, we create brand identities that grab attention, tell stories, and make people trust you.
</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogHeading'
        >
          <h2 className="singleServiceOurPackagesHeading singleServiceBlogHeading2">WHY YOU NEED A PROFESSIONAL DESIGN TEAM:</h2>  
        </motion.div>

        <motion.div
          initial={{opacity: 0, translateY: '50px'}}
          whileInView={{opacity: 1, translateY: '0px'}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='singleServiceBlogSection'
        >
          <p className="singleServiceBlogSubheading">Modern graphic design tools like Canva and AI art generators have made designing pretty graphics really easy, so why do you need a professional design team? Because Canva templates and AI tools have one fatal flaw – they can’t capture what makes your business unique. These free tools spit out generic, impersonal graphics that makes your business appear forgettable, unprofessional, and untrustworthy. <br></br><br></br>With the help of a professional design team like Viranda, you can be confident knowing that all of your designs will look polished, grab attention, and stand out above the noise. We focus on creating brand identities, so that people can recognize and remember your brand - just by looking at your graphics.
</p>
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
          <p className="singleServiceBlogSubheading">We’ve seen what happens when brands settle for cheap or rushed design. At Viranda, we do things differently, avoiding any frustration, inconsistency, or wasted money. Here’s what makes us different:<br></br><br></br>
             <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;OUR VALUES:</span>
              <span className="extraSpacing"><br></br></span> We value transparency, honesty, and excellence, keeping you informed every step of the way while exceeding our promises.
              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CUSTOM DESIGN:</span><span className="extraSpacing"><br></br></span>
We don’t use templates, or follow a general design style. Every design element is tailor-made to suit your business, and create a unique identity that you will be recognized by,              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;REVISIONS:</span><span className="extraSpacing"><br></br></span>
We’re constantly revising and reviewing our designs until we reach perfection – never settling for “it’s almost there.”              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;CONSISTENCY:</span><span className="extraSpacing"><br></br></span>
We ensure that all of your marketing material, whether it’s your logo, social media graphics, or anything else, all look like they belong together – consistent, professional, and instantly recognizable.              <br></br><br></br>
              <FontAwesomeIcon icon={faSquareCheck} className='blogIcon'/><span className='spanBold'>&nbsp;&nbsp;BUILT FOR IMPACT:</span><span className="extraSpacing"><br></br></span>
We don’t just make things that look pretty – we create strategic, eye-catching designs focused on catching the attention of potential customers and driving them towards becoming loyal supporters.              </p>
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
We have a conversation with you discussing what you need designed, how you want your designs to look, and what you want to achieve through your designs.              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>02</span>&nbsp;&nbsp;&nbsp;CONCEPTUALIZATION:</span><span className="extraSpacing"><br></br></span>
We design multiple designs – ensuring that they all look professional, are eye-catching, and drive action.              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>03</span>&nbsp;&nbsp;&nbsp;REVIEW:</span><span className="extraSpacing"><br></br></span>
We present your designs to you and have another conversation – what you like, what you don’t like, and what needs to change.              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>04</span>&nbsp;&nbsp;&nbsp;REVISION:</span><span className="extraSpacing"><br></br></span>
We redesign your material based on the review and repeat the process as necessary,              <br></br><br></br>
              <span className='spanBold'><span className='spanRed'>05</span>&nbsp;&nbsp;&nbsp;DEPLOYMENT:</span><span className="extraSpacing"><br></br></span>
We send your polished designs over to you in high resolution.          </p>
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
          <p className="singleServiceBlogSubheading">Your design isn’t just decoration – it’s your brand’s identity, voice, and reputation. Whether you need designs for a new business, or you’re looking to redesign your visuals, we’re ready to design something that works.</p>
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

export default GraphicDesignPage