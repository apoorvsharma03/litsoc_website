import React from 'react'

const FooterLarge = () => {
  return (
    <div id='contact' className='bg-[#ccb57e] p-5 pb-2 mt-10'>
      <h1 className='text-[#222222d4] text-2xl text-center'>Contact Us</h1>
      <hr className='border-[#222222d4] mt-2 mb-5'/>
      <div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-center items-start gap-y-4'>
                <div>   
                    <a href='mailto:literarysociety@bitmesra.ac.in' className='flex justify-center items-center gap-2 duration-100 hover:text-[#913326]'>
                    <div className='opacity-70 text-3xl flex items-start justify-center'>
                        <ion-icon name="mail"></ion-icon>
                    </div>
                    <div>
                        <p>literarysociety@bitmesra.ac.in</p>
                    </div>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/company/literary-society-bit-mesra/mycompany/' className='flex justify-center items-center gap-2 duration-100 hover:text-[#0A66C2]'>
                        <div className='opacity-70 text-3xl flex items-center justify-start'>
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                        <div>
                            <p>The Literary Society, BIT Mesra</p>
                        </div>
                    </a>
                </div>
            </div>
            {/* <div className='flex gap-2'>
                <div className='flex flex-col gap-y-4'> 
                    <div className='flex justify-center items-center gap-2 duration-100 hover:text-[#25863f]'>
                        <div className='opacity-70 text-3xl flex items-center justify-center'>
                            <ion-icon name="call"></ion-icon>
                        </div>
                        <div>
                            <p>Sparsh: 7979710004</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 duration-100 hover:text-[#25863f]'>
                        <div className='opacity-70 text-3xl flex items-center justify-center'>
                            <ion-icon name="call"></ion-icon>
                        </div>
                        <div>
                            <p>Mohit: 7061940140</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='flex gap-2 hover:text-[#25863f]'>
                <div className='opacity-70 text-3xl flex items-center justify-center'>
                        <ion-icon name="call"></ion-icon>
                </div>
                <div className='flex flex-col justify-between'> 
                    <div className='flex justify-start items-center gap-2 duration-100'>
                        <div>
                            <p>Sparsh: 7979710004</p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 duration-100'>
                        <div>
                            <p>Mohit: 7061940140</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div className='flex justify-center gap-5'>
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
        </div>
      </div>
    </div>
  )
}

export default FooterLarge