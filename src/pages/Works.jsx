import React from 'react'
import WorksCard from '../components/WorksCard'
import Works_bg from '../assets/works_bg.jpg'
import { Compositions } from '../assets/Compositions'
import { Reviews } from '../assets/Reviews'
import { Blogs } from '../assets/Blogs'

const Works = () => {
  return (
    <>  
        <div>
          <div className='w-fit h-fit'>
            <h1 className='relative top-32 lg:top-40 bg-[#00000098] text-[#ccb57e] w-full text-center p-5 text-3xl z-50'>OUR WORKS</h1>
            <div className='bg-[#302306]'>
              <img src={Works_bg} alt="our works" className='inset-0 min-w-[100vw] h-[200px] lg:h-auto max-h-[280px] object-cover object-center z-0 opacity-25'/>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='max-w-[80vw] m-auto'>
          <section className='mt-5 mb-20'>
            <h1 className='text-2xl text-center md:text-left md:text-3xl text-[#222222d4]'>Stories and Tales</h1>
            <hr className='border-[#222222d4] mt-2 mb-5 lg:mb-10'/>
            <div className='flex flex-wrap justify-center lg:flex-nowrap lg:justify-between'>
              {Compositions.map(composition => (
                <WorksCard id = {composition.id} type="compositions" name={composition.name} author={composition.author} insta_link={composition.insta_link} cover={composition.cover}/>
              ))}
            </div>
          </section>
          <section className='mt-5 mb-20'>
            <h1 className='text-2xl text-center md:text-left md:text-3xl text-[#222222d4]'>Literary Reviews</h1>
            <hr className='border-[#222222d4] mt-2 mb-5 lg:mb-10'/>
            <div className='flex flex-wrap justify-center lg:flex-nowrap lg:justify-between'>
              {Reviews.map(review => (
                <WorksCard id = {review.id} type="reviews" name={review.name} author={review.author} insta_link={review.insta_link} cover={review.cover}/>
              ))}
            </div>
          </section>
          {/* <section className='mt-5 mb-20'>
            <h1 className='text-2xl text-center md:text-left md:text-3xl text-[#222222d4]'>Blogs</h1>
            <hr className='border-[#222222d4] mt-2 mb-5 lg:mb-10'/>
            <div className='flex flex-wrap justify-center lg:flex-nowrap lg:justify-between'>
              {Blogs.map(blog => (
                <WorksCard id = {blog.id} type="blogs" name={blog.name} author={blog.author} insta_link={blog.insta_link} cover={blog.cover}/>
              ))}
            </div>
          </section> */}
        </div>
    </>
  )
}

export default Works