import React from 'react'
import logo from "../assets/logo_black.png"
import "./Header.css"

const Header = () => {
  return (
    <div className=' flex justify-between items-center p-5 bg-[#b5b5b5]'>
      <div className='flex justify-center items-center gap-2'>
        <img src= {logo} alt="logo" className='w-20'/>  
        <h1 className='site_name text-3xl text-[#000000]'>The Literary Society</h1>
      </div>
    </div>
  )
}

export default Header