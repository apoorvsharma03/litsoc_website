import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo_black.png"
import bit_logo from "../assets/bit_logo.png"
import line from "../assets/vertical_line.png"
import { useState } from 'react'
import "../App.css"

const Header = () => {
  let LINKS = [
              {name: "HOME", link: "/"}, 
              {name: "OUR WORKS", link: "/our_works"}, 
              {name: "TEAM", link: "/team"}, 
  ]

  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between items-center p-5 bg-[#ccb57e] fixed top-0 w-full max-h-[100px] z-[51]'>
      <div className='flex justify-center items-center gap-2'>
        <a href='/' className='flex justify-evenly items-center gap-0.5'>
          <img src={bit_logo} alt="BIT Logo" className='w-10 p-0 md:w-[4rem]'/>
          <img src={line} alt="line" className='h-10 md:h-[4rem]' />
          <img src= {logo} alt="Litsoc Logo" className='w-10 md:w-[4rem]'/>
        </a>  
        &nbsp;
        <div>
          <h1 className='text-lg md:text-3xl text-[#222222d4]'>The Literary Society</h1>
        </div>
      </div>
      <div onClick={()=>setOpen(!open)} className='absolute right-5 text-2xl cursor-pointer lg:hidden'>
        <ion-icon name={open? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`absolute top-20 lg:static lg:flex lg:items-center lg:bg-transparent bg-[#ccb57e] transition-all duration-200 ease-in-out lg:z-auto z-[-2] ${open? 'right-0  opacity-100':'opacity-0 right-[-160px]  lg:opacity-100'}`}>
        {
          LINKS.map((link) => (
            <li onClick={()=>setOpen(false)} className='p-2 mb-2 mt-2 lg:mt-0 lg:mb-0 mr-4 lg:mr-0 ml-4 font-[1100] text-[#222222d4] rounded-2xl duration-100 hover:text-[#f4f6d4] hover:bg-[#222222d4]'>
                <Link to = {`${link.link}`}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Header