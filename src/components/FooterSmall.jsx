import React from 'react'

const FooterSmall = () => {
  return (
    <div id='contact' className='bg-[#ccb57e] p-5 mt-10'>
      <h1 className='text-[#222222d4] text-lg text-center'>Contact Us</h1>
      <hr className='border-[#222222d4] mt-2 mb-5'/>
      <div className='flex justify-around flex-wrap gap-x-14 gap-y-5'>
        <div className='flex justify-center items-center gap-2 duration-100 hover:text-[#25863f]'>
          <div className='opacity-70 text-3xl flex items-center justify-center'>
            <ion-icon name="call"></ion-icon>
          </div>
          <div className='flex items-center gap-2 duration-75'>
            <div>
              <h2>Sparsh:<div>7979710004</div></h2>              
            </div>
            <br />
            <div>
              <h2>Mohit:<div>7061940140</div></h2>              
            </div>
          </div>
        </div>
        <a href='mailto:literarysociety@bitmesra.ac.in' className='flex justify-center items-center gap-2 duration-100 hover:text-[#913326]'>
          <div className='opacity-70 text-3xl flex items-center justify-center'>
            <ion-icon name="mail"></ion-icon>
          </div>
          <div>
            <p>literarysociety@bitmesra.ac.in</p>
          </div>
        </a>
        <div className='flex justify-center gap-5 w-full'>
          <a href='https://www.instagram.com/litsocbitm/' className='flex justify-center items-center gap-2 duration-100 hover:text-[#E1306C]'>
            <div className='opacity-70 text-3xl flex items-center justify-center'>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </a>
          <a href='https://www.facebook.com/LiterarySocietyBITMesra' className='flex justify-center items-center gap-2 duration-100 hover:text-[#1876f2e9]'>
            <div className='opacity-70 text-3xl flex items-center justify-center'>
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </a>
          <a href='https://www.linkedin.com/company/literary-society-bit-mesra/mycompany/' className='flex justify-center items-center gap-2 duration-100 hover:text-[#0A66C2]'>
            <div className='opacity-70 text-3xl flex items-center justify-center'>
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterSmall