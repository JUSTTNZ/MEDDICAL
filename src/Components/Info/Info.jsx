import React from 'react'
import logo from '../../assets/homeassets/Meddical.svg'
import call from '../../assets/homeassets/call.svg'
import clock from '../../assets/homeassets/clock.svg'
import location from '../../assets/homeassets/location.svg'

const Info = () => {
  return (
    <>
       {/*info components*/}
       <div className='bg-white p-[20px] flex justify-around align-center text-lg  '>
        <img src={logo} alt="logo" className='h-7 width-auto my-4 mr-10'/>
        <div className='flex align-center  px-16 space-x-16 text-lg'>
          <div className='flex space-x-3'>
            <img src={call} alt="call" className='h-10 '/>
            <div>
              <p className='text-primary '>EMERGENCY</p>
              <p className='text-secondary'>(237)681-812-255</p>
            </div>
          </div>
          <div className='flex space-x-3'>
          <img src={clock} alt="call" className='h-10'/>
            <div>
              <p className='text-primary '>WORK HOUR</p>
              <p className='text-secondary'>09:00 - 20:00 Everyday</p>
            </div>
          </div>
          <div className='flex space-x-3 '>
            <img src={location} alt="call" className='h-10'/>
            <div>
              <p className='text-primary '>LOCATION</p>
              <p className='text-secondary'>0123 Same Place</p>
            </div>
          </div>   
        </div>
       </div>
    </>
  )
}

export default Info
