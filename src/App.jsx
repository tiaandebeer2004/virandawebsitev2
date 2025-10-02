import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import WebDesignPage from './pages/WebDesignPage';
import GraphicDesignPage from './pages/GraphicDesignPage'
import SocialMediaContentPage from './pages/SocialMediaContentPage'
import SocialMediaManagementPage from './pages/SocialMediaManagementPage'
import GoogleAdsPage from './pages/GoogleAdsPage'
import MetaAdsPage from './pages/MetaAdsPage'
import SEOPage from './pages/SEOPage'
import AdCreationPage from './pages/AdCreationPage';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio'
import ScrollToTop from './components/Hooks/ScrollToTop.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/services' element={<ServicesPage></ServicesPage>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/services/website-development' element={<WebDesignPage></WebDesignPage>}></Route>
          <Route path='/services/graphic-design' element={<GraphicDesignPage></GraphicDesignPage>}></Route>
          <Route path='/services/social-media-content-creation' element={<SocialMediaContentPage></SocialMediaContentPage>}></Route>
          <Route path='/services/social-media-management' element={<SocialMediaManagementPage></SocialMediaManagementPage>}></Route>
          <Route path='/services/google-ads-management' element={<GoogleAdsPage></GoogleAdsPage>}></Route>
          <Route path='/services/facebook-meta-ads-management' element={<MetaAdsPage></MetaAdsPage>}></Route>
          <Route path='/services/ad-creation' element={<AdCreationPage></AdCreationPage>}></Route>
          <Route path='/services/search-engine-optimization' element={<SEOPage></SEOPage>}></Route>
          <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
