import React from 'react'
import calendar from '../assets/homeassets/39.-Calendar.svg'
import team from '../assets/homeassets/27.-Team.svg'
import cash from '../assets/homeassets/15.-Cash.svg'
import vector from '../assets/homeassets/Vector.svg'
import group183 from '../assets/homeassets/Group 183.svg'
import medical from '../assets/homeassets/medical 1.svg'
import heart from '../assets/homeassets/Vector (1).svg'
import aid from '../assets/homeassets/Vector (2).svg'
import emergency from '../assets/homeassets/Vector (3).svg'
import group186 from '../assets/homeassets/Group 186 (1).svg'
import group187 from '../assets/homeassets/Group 187 (1).svg'

const Home = () => {
  return (
    <>
     <div className='bg-background'>
     <div className='bg-custom-homepage-image bg-cover bg-right bg-no-repeat h-screen flex flex-col justify-center p-[200px] '>
        <h3 className=' font-yeseva text-secondary text-3xl pl-24'>CARING FOR LIFE</h3>
        <h2 className='font-yeseva text-primary text-6xl align-center pl-24'>Leading the Way <br /> in Medical Excellence</h2>
        <div className='w-full'>
        <p className=' font-yeseva sm:w-25 lg:w-25 md:w-45 xl:w-25  ml-24 mr-[550px] mt-8 px-2 py-2 bg-tertiary rounded-full text-primary'>Our Services</p>
        </div>
      </div>

      <div className='flex justify-evenly text-lg relative bottom-12 z-50 '>
        <div className='bg-primary flex  align-center px-16 py-6 gap-16 leading-loose text-white rounded'>
          <p className=''>Book an Appointment</p>
          <img src={calendar} alt="" className='w-14'/>
        </div>
        <div className='bg-tertiary flex align-center px-16 py-6 leading-loose gap-16 text-primary rounded'>
          <p>Book an Appointment</p>
          <img src={team} alt="" className='w-16' />
        </div>
        <div className='bg-secondary flex align-center px-16 py-6 leading-loose text-white gap-16 rounded'>
          <p>Book an Appointment</p>
          <img src={cash} alt="" className='w-16'/>
        </div>
      </div>
      {/* after hero session */}
      <div className='bg-white relative bottom-24 pt-24 z-0 ml-8'>
        <div className='flex flex-col text-center'>
          <h3 className='text-secondary text-2xl font-yeseva pb-3'>WELCOME TO MEDDICAL</h3>
          <h2 className='text-primary text-4xl font-yeseva pb-3'>A Great Place to Receive Care</h2>
          <p className='text-center text-primary font-yeseva sm pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident,</p>
          <div className='flex justify-center text-center gap-4 pb-8'>
            <span className='text-secondary'>Learn More </span>
            <img src={vector} alt="" className=''/>
          </div>
        </div>
        {/* blackdoctors session */}
        <div>
          <div className='flex flex-col justify-center align-center text-center pt-8 pb-12 '>
          <img src={group183} alt="" className=' w-[1900px] mx-auto ' />
          <p className='text-secondary text-2xl font-yeseva pt-16 pb-3'>CARE YOU CAN BELIEVE IN</p>
          <h3 className='text-primary text-4xl font-yeseva pb-3'>Our Services</h3>
        </div>
        <div className='flex mx-auto w-[1900px]'>
          <div className='w-[300px] flex flex-col align-center'>
            <div>
              <img src={medical} alt="" />
              <p>Free Checkup</p>
            </div>
            <div>
              <img src={heart} alt="" />
              <p>Cariogram</p>
            </div>
            <div>
              <img src={aid} alt="" />
              <p>Dna Testing</p>
            </div>
            <div>
              <img src={emergency} alt="" />
              <p>Blood Bank</p>
            </div>
            <div>
              <p>View All</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2>A passion for putting patients first.</h2>
            <div className='flex'>
              <ul>
                <li>A passion for Healing</li>
                <li> All our best</li>
                <li>A Legacy of Excellence</li>
              </ul>
              <ul>
                <li>5-Star Care</li>
                <li>Believe in US</li>
                <li>Always Caring</li>
              </ul>
            </div>
            <div className='text-left w-[1000px]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
            <div className='w-[600px]'>
              <img src={group186} alt="" />
              <img src={group187} alt="" />
            </div>
      </div>
        </div>
        
      </div>
      
     </div>
    </>
  )
}

export default Home
