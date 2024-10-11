import React from 'react'
import { Contact } from "../Abouts/contact"
import rectangle from '../assets/contactsassets/Group 184 (1).svg'
import dropdown from '../assets/appointments/Vector (8).svg'
import call from '../assets/appointments/Group 188 (2).svg'
import map from '../assets/contactsassets/Mapview.svg'
const Appointment = () => {
  return (
    <>
      <div className="relative h-[400px] bg-custom-appointment-image bg-cover bg-center">
        <div className="absolute inset-0 bg-white opacity-40"></div>
        
        {/* Content goes here */}
        <div className="relative z-10 p-4 flex flex-col justify-center  h-full pl-[250px] ">
            <p className='text-primary font-yeseva text-2xl'>Home / Appointment</p>
            <h3 className="text-primary font-yeseva text-6xl">Book an Appointment</h3>
        </div>
        </div>
        <div>
          <img src={rectangle} alt=""  className=' w-full'/>
        </div>
        <div className='flex justify-center items-center w-full'>
        <div>
          <div className='flex w-[1900px] gap-8'>
        <div className='flex-[50%]'>
          <div className='flex flex-col'>
            <div className='font-yeseva pb-16 pt-8'>
              <h3 className='pb-6 text-4xl text-primary'>Book an Appointment</h3>
              <p className='text-lg text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat.</p>
            </div>
            <div className='bg-primary text-tertiary mb-16 '>
              <div className='flex text-tertiary font-yeseva border-b  pl-4'>
                <p className='pt-6 flex-[50%]'>Name</p>
                <div className=' flex flex-[50%]'>
                  <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Gender</p>
                  <img src={dropdown} alt="" className='pr-4' />
                </div>
                
              </div>
              <div className='flex text-tertiary font-yeseva border-b  pl-4'>
              <p className='pt-6 flex-[50%]'>Email</p>
              <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Phone</p>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b  pl-4'>
              <div className=' flex flex-[50%]'>
                  <p className='pl-2 pt-6 pb-6 flex-[50%]'>Date</p>
                  <img src={dropdown} alt="" className='pr-4' />
              </div>
              <div className=' flex flex-[50%]'>
                  <p className=' border-l pl-2 pt-6 pb-6 flex-[50%]'>Time</p>
                  <img src={dropdown} alt="" className='pr-4' />
                </div>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b  pl-4'>
              <div className=' flex flex-[50%]'>
                  <p className='pl-2 pt-6 pb-6 flex-[50%]'>Doctor</p>
                  <img src={dropdown} alt="" className='pr-4' />
              </div>
              <div className=' flex flex-[50%]'>
                  <p className=' border-l pl-2 pt-6 pb-6 flex-[50%]'>Department</p>
                  <img src={dropdown} alt="" className='pr-4' />
                </div>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b pl-4'>
                <p className='pb-[160px]'>Message</p>
              </div>
              <div className='p-4 flex text-primary justify-center bg-tertiary'>
                <p>SUBMIT</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  bg-primary text-tertiary mt-8 pl-24 pr-24 mb-16'>
          <h3 className='font-yeseva text-5xl pt-16 text-center'>Schedule hours</h3>
          <div className=''>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>09:00 AM - 07:00 PM</p>
            </div>
            <div className='flex gap-20 pt-8 text-2xl'>
              <p>monday</p>
              <span>--</span>
              <p>Closed</p>
            </div>
            <hr className='m-8'/>
            <div>
              <img src={call} alt="" />
              <div>
                <p>Emergency</p>
                <p>(237) 681-812-255</p>
              </div>
            </div>
          </div>
        </div>
        <span className='text-white'>-</span>
        </div>
        <div className='pb-16 items-center '>
          <img src={map} alt="" className='w-[1900px] mx-auto' />
        </div>

        <div className="w-full max-w-[1900px] mx-auto px-4 mt-8">
          <div className="flex justify-center">
            <Contact />
          </div>
        </div>

        </div>
        </div>
        
        
    </>
  )
}

export default Appointment
