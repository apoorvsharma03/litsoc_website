import React from 'react'

const WorksCard = ({name, author, insta_link, cover}) => {
  return (
    <div className='m-2 relative overflow-hidden border-none w-[220px] h-[345px] rounded-3xl shadow-2xl flex-col justify-center lg:hover:scale-110 transition-transform duration-200'>
      <img src={cover} alt="poster" className='w-[220px] h-[220px]'/>
      <div className='bg-[#bb9d6e] h-[125px] flex-col space-y-3'>
        <h1 className='text-center text-lg pt-2 h-[64px] flex items-center justify-center'>{name}</h1>
        <hr className='border-[#222222d4] mt-2 mb-5'/>
        <div className='flex items-center justify-center pb-3'>
          <h2 className='text-center'>{author}</h2>
        </div>
      </div>
    </div>
  )
}

export default WorksCard