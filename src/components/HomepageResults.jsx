import { useState } from 'react'
import './CSS/HomepageResults.css'
import whackedWebsite from '../assets/whackedWebsite.png'
import highmaintenanceWebsite from '../assets/highmaintenanceWebsite.png'
import cosyclosetWebsite from '../assets/cosyclosetWebsite.png'
import craftrepublicLogo from '../assets/craftrepublicLogo.png'

function HomepageResults() {
  const [count, setCount] = useState(0)
  
    return (
      <>
        <div className="HomepageResults">
            <h2 className="homepageResultsHeading1">WE DON'T JUST TALK BIG</h2>   
            <h2 className="homepageResultsHeading2 linearWipe">WE DELIVER BIGGER</h2>   

            <div className="homepageResultsColumns">
                <div className="homepageResultsLeft">
                    <div className="homepageResult">
                        <img src={whackedWebsite} alt="whacked website" className="homepageResultsImage" />
                        <h3 className="homepageResultsColumnHeading">WHACKED MANAGEMENT</h3>
                        <p className="homepageResultsColumnResult">500 000 WEBSITE VISITS IN 3 MONTHS</p>
                    </div>

                    <div className="homepageResult">
                        <img src={craftrepublicLogo} alt="craft republic logo" className="homepageResultsImage" />
                        <h3 className="homepageResultsColumnHeading">CRAFT REPUBLIC</h3>
                        <p className="homepageResultsColumnResult">COMPLETE REBRAND FROM A STALE, BORING BRAND TO A UNIQUE, BOLD BRAND WHICH STANDS OUT AND GETS SALES</p>
                    </div>
                </div>

                <div className="homepageResultsRight">
                    <div className="homepageResult">
                        <img src={highmaintenanceWebsite} alt="high maintenance website" className="homepageResultsImage" />
                        <h3 className="homepageResultsColumnHeading">HIGH MAINTENANCE PCC</h3>
                        <p className="homepageResultsColumnResult">FROM AN IN-PERSON ONLY BUSINESS TO A THRIVING ONLINE STORE</p>
                    </div>

                    <div className="homepageResult">
                        <img src={cosyclosetWebsite} alt="cosy closet website" className="homepageResultsImage" />
                        <h3 className="homepageResultsColumnHeading">COSY CLOSET</h3>
                        <p className="homepageResultsColumnResult">HELPED A TALENTED ENTREPENEUR START HER FIRST ONLINE BUSINESS</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }

export default HomepageResults