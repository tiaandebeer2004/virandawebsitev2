import { useState } from 'react'
import './CSS/Section2.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'
import Hero2 from './Hero2'
import HomepageServices from './HomepageServices'
import HomepageResults from './HomepageResults'
import ContactPageContactSectionHome from './ContactPageContactSectionHome'
import Footer from '../components/Footer.jsx'

function Section2() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()

  if (scrollY < 500) {
    return (
      <>
          <div className="preSection2" style={{ position: 'fixed', height: (scrollY/5) + 'vh', top: (50 - (scrollY/10)) + 'vh' }}>
              
          </div>
      </>
    )
  } else {
    return (
      <>
          <div className="preSection2" style={{ position: 'absolute', top: 0}}>
              <Hero2></Hero2>    
              <HomepageServices></HomepageServices>
              <HomepageResults></HomepageResults>

              <div className="homepageContactSectionWrapper">
                  <ContactPageContactSectionHome></ContactPageContactSectionHome>
              </div>

              <div className="homepageFooterWrapper">
                  <Footer></Footer>
              </div>
          </div>
      </>
    )
  }

}

export default Section2
