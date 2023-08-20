import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className='bg-[#ccb57e] p-5 mt-10'>
      <h1 className='text-[#222222d4] text-lg md:text-2xl'>Contact Us</h1>
      <hr className='border-[#222222d4] mt-2 mb-5'/>
      <div className='flex justify-around flex-wrap lg:flex-nowrap gap-x-14 gap-y-5 md:gap-y-10'>
        <div className='flex justify-center items-center gap-2 duration-100 hover:text-[#25863f]'>
          <div className='opacity-70 text-3xl md:text-4xl  flex items-center justify-center'>
            <ion-icon name="call"></ion-icon>
          </div>
          <div className='flex items-center gap-2 duration-75'>
            <div>
              <h2>Sparsh:<div>1234567890</div></h2>              
            </div>
            <br />
            <div>
              <h2>Mohit:<div>1234567890</div></h2>              
            </div>
          </div>
        </div>
        <a href='mailto:litsoc.bitm@gmail.com' className='flex justify-center items-center gap-2 duration-100 hover:text-[#913326]'>
          <div className='opacity-70 text-3xl md:text-4xl flex items-center justify-center'>
            <ion-icon name="mail"></ion-icon>
          </div>
          <div>
            <p>litsoc.bitm@gmail.com</p>
          </div>
        </a>
        <div className='flex justify-center gap-5 xl:gap-0  xl:justify-between w-full'>
          <a href='https://www.instagram.com/litsocbitm/' className='flex justify-center items-center gap-2 duration-100 hover:text-[#E1306C]'>
            <div className='opacity-70 text-3xl md:text-4xl flex items-center justify-center'>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div className='hidden xl:block'>
              <p>litsocbitm</p>
            </div>
          </a>
          <a href='https://www.facebook.com/LiterarySocietyBITMesra' className='flex justify-center items-center gap-2 duration-100 hover:text-[#1876f2e9]'>
            <div className='opacity-70 text-3xl md:text-4xl flex items-center justify-center'>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>

            <div className='hidden xl:block'>
              <p>Literary Society, BIT Mesra</p>
            </div>
          </a>
          <a href='https://www.linkedin.com/company/literary-society-bit-mesra/mycompany/' className='flex justify-center items-center gap-2 duration-100 hover:text-[#0A66C2]'>
            <div className='opacity-70 text-3xl md:text-4xl flex items-center justify-center'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>

            <div className='hidden xl:block'>
              <p>Literary Society, BIT Mesra</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer