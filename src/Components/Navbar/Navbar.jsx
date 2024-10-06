import React from 'react'
import search from '../../assets/homeassets/search.svg'
const Navbar = () => {
  return (
    <>
      <div className='bg-primary flex p-4 text-white justify-around gap-20 pr-16'>
        <div>
            <ul className='flex space-x-10 text-lg pr-20 gap-10 leading-loose'>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Doctors</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>
        
        <div className='flex space-x-6'>
            <img src={search} alt="" />
            <p className='bg-tertiary py-2  px-4 rounded-full text-primary'>Appointment</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
