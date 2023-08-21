import React from 'react'
import TeamCard from '../components/TeamCard'

const Team = () => {
  return (
    <div className='max-w-[80vw] m-auto mt-10 lg:mt-20'>
      <h1 className='text-2xl text-center md:text-left md:text-3xl text-[#222222d4]'>Meet The Team</h1>
      <hr className='border-[#222222d4] mt-2 mb-5 lg:mb-10'/>
      <div className='flex flex-wrap justify-center lg:justify-between gap-y-10'>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard/>
          <h2 className='mt-5'>Faculty Advisor</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard/>
          <h2 className='mt-5'>President</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard/>
          <h2 className='mt-5'>Vice President</h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <TeamCard/>
          <h2 className='mt-5'>Vice President</h2>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h2 className='text-xl lg:text-2xl'>K20s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
        </div>
        <br />
        <br />
        <h2 className='text-xl lg:text-2xl'>K21s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
        </div>
        <br />
        <br />
        <h2 className='text-xl lg:text-2xl'>K22s:</h2>
        <hr className='border-[#222222d4] mt-2 mb-5 '/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
          <h3>Name</h3>
        </div>
      </div>
    </div>
  )
}

export default Team