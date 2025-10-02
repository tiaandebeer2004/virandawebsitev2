import { useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'
import useWindowDimensions from '../components/Hooks/useWindowDimensions'
import { useWindowScrollPositions } from '../components/Hooks/useWindowScrollPositions'
import NavbarBlack from '../components/NavbarBlack'

function Home() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowDimensions();
  const { scrollX, scrollY } = useWindowScrollPositions()

  return (
    <>
      {(scrollY <= (height - 240)) ? (
        <Navbar></Navbar>
      ) : (
        <NavbarBlack></NavbarBlack>
      )}
      <Banner></Banner>
      <Section2></Section2>
    </>
  )
}

export default Home