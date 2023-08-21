import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FooterSmall from './components/FooterSmall'
import FooterLarge from './components/FooterLarge'

import Home from './pages/Home'
import Team from './pages/Team'
import Works from './pages/Works'

const App = () => {
  const [width, setWidth]   = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <Header/>
      <div className='h-[80px] md:h-[100px]'></div>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/our_works" element={<Works/>} />
        </Routes>
      </main>
      {width < 1024 ? (
        <FooterSmall/>
      ) : (
        <FooterLarge/>
      )}
    </>
  )
}

export default App