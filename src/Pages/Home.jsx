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
import vector5 from '../assets/homeassets/Vector (5).svg'
import vector4 from '../assets/homeassets/Vector (4).svg'


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
          <div className='w-[250px] flex flex-col align-center ml-4 mr-24 mb-4 border-4 text-lg rounded'>
            <div className=' pb-8 pt-8 pl-16 '>
              <img src={medical} alt="" className='w-[50px] ml-4 '/>
              <p>Free Checkup</p>
            </div>
            <div className='pb-8 pt-8 bg-primary pr-8 pl-16 text-tertiary hover:bg-white-500 rounded '>
              <img src={heart} alt="" className='w-[50px] ml-4 '/>
              <p>Cariogram</p>
            </div>
            <div className='pb-8 pt-8 pl-16'>
              <img src={aid} alt=""className='w-[50px] ml-4' />
              <p>Dna Testing</p>
            </div>
            <div className='pb-8 pt-8 pl-16'>
              <img src={emergency} alt="" className='w-[50px] ml-4'/>
              <p>Blood Bank</p>
            </div>
            <div className='pb-3 pt-3 pl-16 bg-primary rounded text-tertiary'>
              <p>View All</p>
            </div>
          </div>
          <div className='flex flex-col mr-'>
            <h2 className='text-4xl font-yeseva text-primary'>A passion for putting patients first.</h2>
            <div className='flex text-3xl gap-[10rem] tracking-wide text-primary '>
              <ul className='[&>li]:flex [&>li]:items-center [&>li]:before:content-["•"] [&>li]:before:text-blue-500 [&>li]:before:text-6xl [&>li]:before:mr-4'>
                <li>A passion for Healing</li>
                <li>All our best</li>
                <li>A Legacy of Excellence</li>
              </ul>
              <ul className='[&>li]:flex [&>li]:items-center [&>li]:before:content-["•"] [&>li]:before:text-blue-500 [&>li]:before:text-6xl [&>li]:before:mr-4'>
                <li>5-Star Care</li>
                <li>Believe in US</li>
                <li>Always Caring</li>
              </ul>
            </div>

            <div className='flex justify-center'>
              <div className='text-left w-[1000px] mr-9'>
                <p className='text-lg text-yeseva '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> <br />
                   
                </p>

                <p className='text-lg text-yeseva '>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

        </div>
            <div className='w-[600px] '>
              <img src={group186} alt="" className='w-full'/>
              <img src={group187} alt="" className='w-full'/>
            </div>
      </div>
      </div>
      <div class="flex flex-col items-center mt-24 pb-16">
    <div class="text-center mb-8 font-yeseva space-y-8 ">
        <h3 className='text-2xl text-secondary font-bold'>ALWAYS CARING</h3>
        <h2 className='text-4xl text-primary font-bold'>Our Specialties</h2>
    </div>
    <div class="w-[1900px]">
        <div class="grid grid-cols-4 gap-0">
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Neurology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Neurology</p>
            </div>
            <div class="flex flex-col bg-primary text-tertiary items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector5} alt="Bones" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Bones</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Oncology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Oncology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Otorhinolaryngology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Otorhinolaryngology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Ophthalmology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Ophthalmology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Cardiovascular" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Cardiovascular</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Pulmonology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Pulmonology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Renal Medicine" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Renal Medicine</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Gastroenterology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Gastroenterology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Urology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Urology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Dermatology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Dermatology</p>
            </div>
            <div class="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 w-[475px] justify-center">
                <img src={vector4} alt="Gynecology" class="mx-auto h-24 mb-2" />
                <p class="text-lg">Gynecology</p>
            </div>
        </div>
    </div>
</div>

      <div className='bg-custom-appointment-image'>
        <div>
          <h2>Book an Appointment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          
        </div>
      </div>



      </div>
     </div>
    </>
  )
}

export default Home
