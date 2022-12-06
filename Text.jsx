import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Text = () => {
  return (
    <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3 py-4 px-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
            <div>
            <h1>A TRUE PASSION FOR TRAVEL</h1>   
   <p className="text-xl py-4">For every one of us, travel came first. We've spent years living as nomads, pioneers, and voyagers— from island hopping in the Philippines to trekking in the Andes Mountains—travel is what we do. And it’s no secret that travellers love to share their stories. We’ve swapped stories on beaches, buses, boats, and beyond! Our passion for travel shines through our exceptionally high-quality content. Would you say we’re glowing? We think we’re glowing.</p>
        </div>
       
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>BEST SERVICES</h3>
                <p className='py-1 ml-2'>GURANTEED ENJOYMENT</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>24 x BOOKINGS</h3>
                <p className='py-1 ml-2'>MILLION'S OF BOOKINGS</p>
            </div>
          </div>
        </div>
        </div>
        
        
        <div>
            <div className=' text-center border cursor-pointer'>
                <p className='py-2'>20%Off on first booking</p>
                <p className="py-4">Vouchers offered</p>
                <p className='bg-orange-500 text-white py-2'>Book Now and Save Later</p>
            </div>
            <div>
              <form className='w-full my-4'>
                <div className="flex flex-col my-2">
                  <label>Locations</label>
                  <select className="rounded-md p-2 border">
                    <option>INDIA</option>
                    <option>AUSTRALIA</option>
                    <option>US</option>
                    <option>UK</option>
                    <option>DUBAI</option>
                    <option>FRANCE</option>
                  </select>    
                </div>
                <div className="flex flex-col my-2">
                  <label>Date</label>
                  <input className="rounded-md p-2 border" type="date" />
                </div>
                <div className="flex flex-col my-2">
                  <label>Suggestions</label>
                  <input className="rounded-md p-2 border" type="text" /></div>
                  <button className="w-full my-4">
                    Hotels Availability
                  </button>
              </form>
            </div>
        </div>

    </div>
  )
}

export default Text