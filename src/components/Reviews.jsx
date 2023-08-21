import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <div className='w-full mt-5 flex justify-center items-center flex-wrap gap-10'>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
    </div>
  )
}

export default Reviews