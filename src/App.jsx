import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Team from './pages/Team'
import Works from './pages/Works'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/our_works" element={<Works/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App