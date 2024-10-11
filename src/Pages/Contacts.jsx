import React from 'react'
import { News } from '../Abouts/news'
import backgroundImage from '../assets/contactsassets/Rectangle 3.svg'
import rectangle from '../assets/contactsassets/Group 184 (1).svg'
import map from '../assets/contactsassets/Mapview.svg'
import call from '../assets/contactsassets/Group 188 (1).svg'
import location from '../assets/contactsassets/Group 178 (1).svg'
import email from '../assets/contactsassets/Group 202.svg'
import clock from '../assets/contactsassets/Group 177 (1).svg'
const Contacts = () => {
  return (
    <>
     <div>
        <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-white opacity-40"></div>
        
        {/* Content goes here */}
        <div className="relative z-10 p-4 flex flex-col justify-center  h-full pl-[450px]">
            <p className='text-primary font-yeseva text-lg'>Home / Contact</p>
            <h3 className="text-primary font-yeseva text-4xl">Our Contacts</h3>
        </div>
        </div>
        <div>
          <img src={rectangle} alt=""  className=' w-full'/>
        </div>

        <div className="flex justify-center m-16">
          <img src={map} alt="" className="w-[1500px] mx-auto" />
        </div>


        <div className=" flex items-center justify-center bg-gray-100 p-6 mt-24 mb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1500px] w-full mx-auto">

    {/* Left Column - Text and Form */}
    <div className="w-full">
      {/* Heading Text Outside the Form */}
      <div className="mb-4">
        <h2 className="text-sm text-secondary font-semibold">GET IN TOUCH</h2>
        <h3 className="text-3xl font-bold text-primary">Contact</h3>
      </div>

      {/* Form Section with Labels and White Borders */}
      <div className="bg-primary rounded-lg shadow-lg text-white">
      <div className='flex text-tertiary font-yeseva border-b mb-6 pl-4'>
        <p className='pt-6 flex-[50%]'>Name</p>
        <p className='border-l pl-2 pt-6 flex-[50%]'>Email</p>
      </div>

        <div className='text-tertiary font-yeseva border-b mb-6 pl-4'>
          Subject
        </div>
        <div className='text-tertiary font-yeseva border-b  pl-4'>
          <p className='pb-[160px]'>Message</p>
        </div>
        <div className='p-4 flex text-primary justify-center bg-tertiary'>
          <p>SUBMIT</p>
        </div>
      </div>
    </div>

    {/* Right Column - Contact Details */}
    <div className="grid grid-cols-2 gap-4">
      
      {/* Emergency Contact */}
      <div className="bg-tertiary pl-4 pt-10 pb-8 rounded-lg text-center flex flex-col items-start">
        <img src={call} alt="" className="pb-2" />
        <h4 className="font-semibold">EMERGENCY</h4>
        <p className="mb-2">(237) 681-812-255</p>
        <p className="mb-4">(237) 666-331-894</p>
      </div>

      {/* Location Details */}
      <div className="bg-primary pl-4 pt-10 pb-8 text-tertiary rounded-lg text-center flex flex-col items-start">
        <img src={location} alt="" className="pb-2" />
        <h4 className="font-semibold">LOCATION</h4>
        <p className="mb-2">0123 Some place</p>
        <p className="mb-4">9876 Some country</p>
      </div>

      {/* Email Details */}
      <div className="bg-tertiary pl-4 pt-10 pb-8 rounded-lg text-center flex flex-col items-start">
        <img src={email} alt="" className="pb-2" />
        <h4 className="font-semibold">EMAIL</h4>
        <p className="mb-2">filidineeose@gmail.com</p>
        <p className="mb-4">myebstudios@gmail.com</p>
      </div>

      {/* Working Hours */}
      <div className="bg-tertiary pl-4 pt-10 pb-8 rounded-lg text-center flex flex-col items-start">
        <img src={clock} alt="" className="pb-2" />
        <h4 className="font-semibold">WORKING HOURS</h4>
        <p className="mb-2">Mon-Sat 09:00-20:00</p>
        <p className="mb-4">Sunday Emergency only</p>
      </div>
    </div>
  </div>
</div>

<News/>



     </div> 
    </>
  )
}

export default Contacts
