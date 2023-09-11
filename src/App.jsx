import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FooterSmall from './components/FooterSmall'
import FooterLarge from './components/FooterLarge'

import Home from './pages/Home'
import Team from './pages/Team'
import Works from './pages/Works'

import Composition1 from './pages/Works/Compositions/One'
import Composition2 from './pages/Works/Compositions/Two'
import Composition3 from './pages/Works/Compositions/Three'
import Composition4 from './pages/Works/Compositions/Four'
import Composition5 from './pages/Works/Compositions/Five'

import Review1 from './pages/Works/Reviewss/One'
import Review2 from './pages/Works/Reviewss/Two'
import Review3 from './pages/Works/Reviewss/Three'
import Review4 from './pages/Works/Reviewss/Four'
import Review5 from './pages/Works/Reviewss/Five'

import Blog1 from './pages/Works/Blogs/One'
import Blog2 from './pages/Works/Blogs/Two'
import Blog3 from './pages/Works/Blogs/Three'
import Blog4 from './pages/Works/Blogs/Four'
import Blog5 from './pages/Works/Blogs/Five'

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

          <Route path="/our_works/compositions/1" element={<Composition1/>} />
          <Route path="/our_works/compositions/2" element={<Composition2/>} />
          <Route path="/our_works/compositions/3" element={<Composition3/>} />
          <Route path="/our_works/compositions/4" element={<Composition4/>} />
          <Route path="/our_works/compositions/5" element={<Composition5/>} />

          <Route path="/our_works/reviews/1" element={<Review1/>} />
          <Route path="/our_works/reviews/2" element={<Review2/>} />
          <Route path="/our_works/reviews/3" element={<Review3/>} />
          <Route path="/our_works/reviews/4" element={<Review4/>} />
          <Route path="/our_works/reviews/5" element={<Review5/>} />

          <Route path="/our_works/blogs/1" element={<Blog1/>} />
          <Route path="/our_works/blogs/2" element={<Blog2/>} />
          <Route path="/our_works/blogs/3" element={<Blog3/>} />
          <Route path="/our_works/blogs/4" element={<Blog4/>} />
          <Route path="/our_works/blogs/5" element={<Blog5/>} />
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