import { useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Section2></Section2>
    </>
  )
}

export default Home
