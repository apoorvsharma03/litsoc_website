import React from 'react'
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
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
        <section id='gallery'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>GALLERY</h1>
            <div className='bg-[#302306]'>
              <img src={Gallery_bg} alt="gallery" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
      </div>
  )
}

export default Home