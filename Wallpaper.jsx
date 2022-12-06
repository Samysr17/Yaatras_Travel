import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import beachVid from '../Assets/beachVid.mp4'

const wallpaper = () => {
  return (
    
    <div className="w-full h-screen relative">
     <video className="h-full w-full object-cover" src={beachVid} autoPlay loop muted/>
   
    <div className="w-full h-full top-0 left-0 absolute bg-black/30">
    </div>
    <div className="flex flex-col text-white absolute w-full h-full top-0 text-center justify-center p-4 ">
        <h1>Luxurious Trips Worldwide</h1>
        <h2 className="py-8">Best Tours at Economical costs</h2>
   
    <form className="flex justify-between w-full max-w-[700px] items-center p-1 border mx-auto rounded-md text-black bg-gray-100/90">
        <div>
        <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none '   type="text" placeholder='Search Tour Sites'/>
        </div>
        <div>
            <button><AiOutlineSearch size={20}  className='icons'/></button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default wallpaper