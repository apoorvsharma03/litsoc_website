import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About_bg from './assets/about_bg.jpg'
import Review_jpg from './assets/reviews_bg.jpg'
import Compositions_bg from './assets/compositions_bg.jpg'
import Gallery_bg from './assets/gallery_bg.jpg'
import Achievements_bg from './assets/achievements_bg.jpg'
import Team_bg from './assets/team_bg.png'

const App = () => {
  return (
    <>
      <Header/>
      <main className='mt-[50px] lg:mt-[100px]'>
        <section id='about_us'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>ABOUT US</h1>
            <div className='bg-[#302306]'>
              <img src={About_bg} alt="about_us" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
        <section id='reviews'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>REVIEWS</h1>
            <div className='bg-[#302306]'>
              <img src={Review_jpg} alt="reviews" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
        <section id='compositions'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>COMPOSITIONS</h1>
            <div className='bg-[#302306]'>
              <img src={Compositions_bg} alt="compositions" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
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
        <section id='achievements'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>ACHIEVEMENTS</h1>
            <div className='bg-[#302306]'>
              <img src={Achievements_bg} alt="achievements" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
        <section id='team'>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>TEAM</h1>
            <div className='bg-[#302306]'>
              <img src={Team_bg} alt="team" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eos, voluptas aliquid accusantium laborum numquam nihil molestias maiores esse dignissimos? Eaque id obcaecati perspiciatis doloremque numquam dolorum fugiat quae error!</p>
          <p className='w-[80vw] mt-10 m-auto text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ducimus praesentium repellat exercitationem quisquam doloremque error dolor veniam, at ab ipsam fugiat quaerat odit quidem accusamus repellendus unde officiis esse?</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App