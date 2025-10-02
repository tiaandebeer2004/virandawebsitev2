import { useState } from 'react'
import './CSS/Section2.css'
import { useWindowScrollPositions } from './Hooks/useWindowScrollPositions'
import Hero2 from './Hero2'
import HomepageServices from './HomepageServices'
import HomepageResults from './HomepageResults'
import ContactPageContactSectionHome from './HomeContactPageContactSection'
import Footer from '../components/Footer.jsx'
import useWindowDimensions from './Hooks/useWindowDimensions.jsx'

function Section2() {
  const [count, setCount] = useState(0)
  const { scrollX, scrollY } = useWindowScrollPositions()
  const { width, height } = useWindowDimensions();

if (width < 840) {
  if (scrollY < 500) {
    return (
      <>
          <div className="preSection2" style={{ overflow: 'hidden', position: 'fixed', height: (scrollY/5) + 'vh', top: (50 - (scrollY/10)) + 'vh' }}>
              <Hero2></Hero2>    
              <HomepageServices></HomepageServices>
              <HomepageResults></HomepageResults>

              <div className="homepageContactSectionWrapper2">
                  <ContactPageContactSectionHome></ContactPageContactSectionHome>
              </div>
              
                  <Footer></Footer>    
          </div>
      </>
    )
  } else {
    return (
      <>
          <div className="preSection" style={{ position: 'absolute', top: 0}}>
              <Hero2></Hero2>    
              <HomepageServices></HomepageServices>
              <HomepageResults></HomepageResults>

              <div className="homepageContactSectionWrapper2">
                  <ContactPageContactSectionHome></ContactPageContactSectionHome>
              </div>

                  <Footer></Footer>
          </div>
      </>
    )
  }
} else {
  if (scrollY < 500) {
    return (
      <>
          <div className="preSection2" style={{ overflow: 'hidden', position: 'fixed', height: (scrollY/5) + 'vh', top: (50 - (scrollY/10)) + 'vh' }}>
              <Hero2></Hero2>    
              <HomepageServices></HomepageServices>
              <HomepageResults></HomepageResults>

              <div className="homepageContactSectionWrapper">
                  <ContactPageContactSectionHome></ContactPageContactSectionHome>
              </div>

                  <Footer></Footer>    
          </div>
      </>
    )
  } else {
    return (
      <>
          <div className="preSection" style={{ position: 'absolute', top: 0}}>
              <Hero2></Hero2>    
              <HomepageServices></HomepageServices>
              <HomepageResults></HomepageResults>

              <div className="homepageContactSectionWrapper">
                  <ContactPageContactSectionHome></ContactPageContactSectionHome>
              </div>

                  <Footer></Footer>
          </div>
      </>
    )
  }
}

}

export default Section2
