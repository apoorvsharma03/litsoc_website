import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import g1 from '../assets/gallery/g1.jpg'
import g2 from '../assets/gallery/g2.jpg'
import g3 from '../assets/gallery/g3.jpg'
import g4 from '../assets/gallery/g4.jpg'
import g5 from '../assets/gallery/g5.jpg'
import g6 from '../assets/gallery/g6.jpg'
import g7 from '../assets/gallery/g7.jpg'

const Carousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        initialSlide={3}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper max-w-[900px] pt-[50px] pb-[50px]"
      >
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g1 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g2 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g3 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g4 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g5 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g6 } className='block w-full' />
        </SwiperSlide>
        <SwiperSlide className='bg-center bg-cover w-[300px] h-[200px] lg:w-[450px] lg:h-[300px]' >
          <img src= { g7 } className='block w-full' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel