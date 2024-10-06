import React from 'react'
import logo from '../../assets/homeassets/Meddical.svg'
import call from '../..//assets/homeassets/call.svg'

const Info = () => {
  return (
    <>
       <div className='bg-white p-[20px] flex '>
        <img src={logo} alt="logo" className='h-5 width-auto px-4'/>
        <div className='flex'>
          <div>
            <img src={call} alt="call" className='h-5'/>
            <div>
              <p className='text-primary '>EMERGENCY</p>
              <p className='text-secondary'>(237)681-812-255</p>
            </div>
          </div>
          <div>
            <img src={call} alt="call" className='h-5'/>
            <div>
              <p className='text-primary '>EMERGENCY</p>
              <p className='text-secondary'>(237)681-812-255</p>
            </div>
          <div>
            <img src={call} alt="call" className='h-5'/>
            <div>
              <p className='text-primary '>EMERGENCY</p>
              <p className='text-secondary'>(237)681-812-255</p>
            </div>
          </div>   
          </div>
        </div>
       </div>
    </>
  )
}

export default Info
