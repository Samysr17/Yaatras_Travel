import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    const[nav,set_nav]=useState(false)
    const[logo,set_logo]=useState(false)
    const handle_nav=()=>{
        set_nav(!nav)
        set_logo(!logo)
    }
  return (
    <div className="flex justify-between items-center h-20 px-4 absolute w-full z-10 text-white">
        <div>
            <h1 onClick={handle_nav} className={nav?"hidden":"block"}>YAATRAS</h1>
        </div>
        <ul className=" hidden md:flex ">
            <li>Home</li>
            <li>Destinations</li>
            <li>Bookings</li>
            <li>About us</li>
        </ul>
        <div className=" hidden md:flex">
            <BiSearch className="mr-6" size={20}/>
            <BsPerson size={20}/>
        </div>
        <div onClick={handle_nav} className="block md:hidden z-10">
            {nav?<AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        </div>
        <div onClick={handle_nav} className={nav ? "absolute left-0 top-0 text-black w-full bg-gray-100/90 px-4 py-7 flex flex-col" :"absolute left-[-100%]" }>
            <h1>YAATRAS</h1>
            <ul>
            <li className="border-b">Home</li>
            <li className="border-b">Destinations</li>
            <li className="border-b">Bookings</li>
            <li className="border-b">About us</li> 
            </ul>  
            <div className=" flex flex-col">
            <button className="my-6">Sign In</button>
            <button>Log In</button>
            </div>
            <div className="flex justify-between my-8">
            <FaFacebook className='icons'/>
            <FaTwitter className='icons'/>
            <FaInstagram className='icons'/>
            <FaYoutube className='icons'/>
            </div>
        </div>

    </div>
  )
}

export default Navbar