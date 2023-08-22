import React from 'react'

import Carousel from '../components/Carousel'

import About_bg from '../assets/about_bg.jpg'
import Gallery_bg from '../assets/gallery_bg.jpg'

const Home = () => {
  return (
    <div>
        <section id='home'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>ABOUT US</h1>
            <div className='bg-[#302306]'>
              <img src={About_bg} alt="about_us" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Nestled within East India's most esteemed institute, Birla Institute of Technology, The Literary Society is the living testimony of diverse talents and versatile personalities. With a focus on literature, our goal is to unite people with different perspectives and foster a culture of inclusivity and acceptance.</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Accompanied by unwavering enthusiasm, we curate a plethora of enriching events that provide a rostrum for talented individuals to showcase their creativity and literary prowess.We are a family of like minded individuals who perceive literature as a medium that gives wings to vulnerability, silences the chaos of a troubled mind, and warms the shuddering veins of a frost-stricken heart. After each engaging venture leaves us with unfathomable emptiness, we seek solace in literature, hoping to be filled with life yet again. As soft drizzles pour down a shower of longings on the untraversed roads, our souls cry a rain of poverty. When the mirrors of our eyes reflect the sight of roses, soulful "shayaris" arise, turning the red of roses into the red of someone's blushing cheeks. Our hearts resonate with the tunes of mellifluous poetries, engaging stories, and heartfelt verses. We aren't afraid to experiment and feed the creativity that lies within.</p>
        </section>
        <section>
          <Carousel />
        </section>
      </div>
  )
}

export default Home