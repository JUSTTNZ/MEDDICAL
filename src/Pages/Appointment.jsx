import React from 'react'
import rectangle from '../assets/contactsassets/Group 184 (1).svg'
import dropdown from '../assets/appointments/Vector (8).svg'
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

        <div className='flex w-[1900px]'>
        <div>
          <div className='flex flex-col'>
            <div className='font-yeseva pb-16 pt-8'>
              <h3 className='pb-6 text-4xl text-primary'>Book an Appointment</h3>
              <p className='text-lg text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat.</p>
            </div>
            <div className='bg-primary text-tertiary mb-16 '>
              <div className='flex text-tertiary font-yeseva border-b  pl-4'>
                <p className='pt-6 flex-[50%]'>Name</p>
                <div className=' flex flex-[50%]'>
                  <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Email</p>
                  <img src={dropdown} alt="" className='pr-4' />
                </div>
                
              </div>
              <div className='flex text-tertiary font-yeseva border-b  pl-4'>
              <p className='pt-6 flex-[50%]'>Name</p>
              <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Email</p>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b  pl-4'>
              <div className=' flex flex-[50%]'>
                  <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Email</p>
                  <img src={dropdown} alt="" className='pr-4' />
                </div>
              <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Email</p>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b  pl-4'>
              <p className='pt-6 flex-[50%]'>Name</p>
              <p className='border-l pl-2 pt-6 pb-6 flex-[50%]'>Email</p>
              </div>
              <div className='flex flex text-tertiary font-yeseva border-b pl-4'>
                <p className='pb-10'>Message</p>
              </div>
              <div className='p-4 flex text-primary justify-center bg-tertiary'>
                <p>SUBMIT</p>
              </div>
            </div>
              
          </div>
        </div>
        </div>
    </>
  )
}

export default Appointment
