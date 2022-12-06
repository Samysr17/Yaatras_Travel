import React from 'react'
import Eiffel from '../Assets/Eiffel.jpg'
import Lake from '../Assets/Lake.jpg'
import City from '../Assets/City.jpg'
import Water from '../Assets/Water.jpg'
import Waterfall from '../Assets/Waterfall.jpg'


const rest = () => {
  return (
    <div className=" container mx-auto px-4 py-16 max-w-[1240px] text-center">
    <h1>Visit and Enjoy World's best Locations</h1>
    <p className="p-4 text-xl">Visit with Family,Friends and Soulmates</p>
    <div className="grid grid-rows-none md:grid-cols-5 gap-2 py-4 md:gap-4">
     <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Eiffel} alt="/" />
     <img className="w-full h-full object-cover" src={Lake} alt="/" />
     <img className="w-full h-full object-cover" src={City} alt="/" />
     <img className="w-full h-full object-cover" src={Water} alt="/" />
     <img className="w-full h-full object-cover" src={Waterfall} alt="/"/>
    </div>
    </div> 
  )
}

export default rest