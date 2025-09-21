import { useRef, useEffect, useState } from 'react'
import '../components/CSS/ServicesPage.css'
import ServicesPageServicesSection from '../components/ServicesPageServicesSection'
import ServicesPageServices from '../components/ServicesPageServices'
import Navbar from '../components/Navbar'
import NavbarBlack from '../components/NavbarBlack'

function ServicesPage() {
  const [count, setCount] = useState(0)

  const servicesRef = useRef(null);
  const [position, setPosition] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
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
    <div className="ServicesPage">
        {(position.top <= 70) ? (
        <Navbar></Navbar>
        ) : (
          <NavbarBlack></NavbarBlack>
        )}

        <ServicesPageServicesSection></ServicesPageServicesSection>
        <div ref={servicesRef}>
            <ServicesPageServices></ServicesPageServices>
        </div>
    </div>
  )
}

export default ServicesPage