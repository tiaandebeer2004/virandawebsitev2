import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import WebDesignPage from './pages/WebDesignPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
          <Route path='/services' element={<ServicesPage></ServicesPage>}></Route>
          <Route path='/services/website-development' element={<WebDesignPage></WebDesignPage>}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
