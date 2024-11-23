import { useState } from 'react'
import img from '../images/call.png'
import img2 from '../images/location.png'
import img3 from '../images/mail.png'
import img4 from '../images/time.png'
import '../css/about.css'
export const Contact = () => {
  const [activeBg, setActiveBg] = useState(null);
  const handleBg = (index) => {
    setActiveBg((prevActiveBg) => (prevActiveBg === index ? null : index))
  }
    return(
      <div className="">
      <div className="container mx-auto lg:pl-[60px] p-4">
        <div className="text-center mb-4">
          <h5 className="touch font-work-sans  text-[#159EEC] font-work-sans font-bold text-18 leading-none tracking-widest text-2xl">Get in touch</h5>
          <h5 className="contact font-yeseva-one text-[#1F2B6C] font-bold text-2xl">Contact Us</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 mt-10">
          <div 
            onClick={() => handleBg(1)}
           className={`flex flex-col items-center w-full px-0 flex-wrap`}>
            <div className={`${activeBg === 1 ? 'bg-[#1F2B6C]' : 'bg-[#BFD2F8]'} p-[20px] w-full lg:w-[200px] rounded-lg`}>
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center ">
                <img src={activeBg === 1 ? img  : ''} className="w-6 h-6" />
              </div>
              <h1 className={`${activeBg === 1 ? 'text-white' : '' } lg:text-lg text-sm font-bold mt-2`}>Emergency</h1>
              <p className="text-sm mt-1">(237) 681-812-255</p>
              <p className="text-sm mt-1">(237) 666-331-894</p>
            </div>
          </div>
          <div className="flex flex-col px-0 flex-wrap items-center w-full">
            <div className="bg-[#1F2B6C] p-[20px] w-full  lg:w-[200px] rounded-lg">
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center ">
                <img src={img2} className="w-6 h-6" />
              </div>
              <h1 className="lg:text-lg text-sm font-bold mt-2">Location</h1>
              <p className="text-sm mt-1">0123 Some place</p>
              <p className="text-sm mt-1">9876 Some country</p>
            </div>
          </div>
          <div className="flex flex-col px-0 flex-wrap items-center w-full">
            <div className="bg-[#BFD2F8] p-[20px] w-full  lg:w-[200px] rounded-lg">
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center ">
                <img src={img3} className="w-6 h-6" />
              </div>
              <h1 className="lg:text-lg text-sm font-bold mt-2">Email</h1>
              <p className="text-sm mt-1">fildineeesoe@gmail.com</p>
              <p className="text-sm mt-1">myebstudios@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col px-0 flex-wrap items-center w-full">
            <div className="bg-[#BFD2F8] p-[20px] w-full  lg:w-[200px] rounded-lg">
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center ">
                <img src={img4} className="w-6 h-6" />
              </div>
              <h1 className="lg:text-lg text-sm font-bold mt-2">Working Hours</h1>
              <p className="text-sm mt-1">Mon-Sat 09:00-20:00</p>
              <p className="text-sm mt-1">Sunday Emergency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}