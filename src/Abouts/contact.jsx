import { useState } from 'react'
import img from '../images/call.png'
import img2 from '../images/location.png'
import img3 from '../images/mail.png'
import img4 from '../images/time.png'
import '../css/about.css'
export const Contact = () => {
  const [activeBg, setActiveBg] = useState(1);
  const handleBg = (index) => {
    setActiveBg((prevActiveBg) => (prevActiveBg === index ? 1 : index))
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
           className={`flex flex-col items-center w-full px-0 flex-wrap `}>
            <div className={`${activeBg === 1 ? 'bg-[#1F2B6C]' : 'bg-[#BFD2F8]'} transition-all duration-500 ease-in-out p-[20px] w-full lg:w-[200px] rounded-lg`}>
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center transition-colors duration-300 ">
                <img src={img} className={`w-6 h-6 ${activeBg === 1 ? 'filter brightness-0 invert' : 'filter invert-[25%] sepia-[80%] saturate-[500%] hue-rotate-[180deg]'}`}/>
              </div>
              <h1 className={`${activeBg === 1 ? 'text-white' : '' }  lg:text-lg  font-bold mt-2`}>Emergency</h1>
              <p className={`${activeBg === 1 ? 'text-white' : '' } mt-1`}>(237) 681-812-255</p>
              <p className={`${activeBg === 1 ? 'text-white' : '' } mt-1`}>(237) 666-331-894</p>
            </div>
          </div>
          <div 
            onClick={() => handleBg(2)}
           className={`flex flex-col items-center w-full px-0 flex-wrap `}>
            <div className={`${activeBg === 2 ? 'bg-[#1F2B6C]' : 'bg-[#BFD2F8]'} transition-all duration-500 ease-in-out p-[20px] w-full lg:w-[200px] rounded-lg`}>
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center transition-colors duration-500 ">
                <img src={img2} className={`w-6 h-6 ${activeBg === 2 ? 'filter brightness-0 invert' : 'filter invert-[25%] sepia-[80%] saturate-[500%] hue-rotate-[180deg]'}`}/>
              </div>
              <h1 className={`${activeBg === 2 ? 'text-white' : '' }  lg:text-lg  font-bold mt-2`}>Emergency</h1>
              <p className={`${activeBg === 2 ? 'text-white' : '' } mt-1`}>(237) 681-812-255</p>
              <p className={`${activeBg === 2 ? 'text-white' : '' } mt-1`}>(237) 666-331-894</p>
            </div>
          </div>
          <div 
            onClick={() => handleBg(3)}
           className={`flex flex-col items-center w-full px-0 flex-wrap `}>
            <div className={`${activeBg === 3 ? 'bg-[#1F2B6C]' : 'bg-[#BFD2F8]'} transition-all duration-500 ease-in-out p-[20px] w-full lg:w-[200px] rounded-lg`}>
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center transition-colors duration-300 ">
                <img src={img3} className={`w-6 h-6 ${activeBg === 3 ? 'filter brightness-0 invert' : 'filter invert-[25%] sepia-[80%] saturate-[500%] hue-rotate-[180deg]'}`}/>
              </div>
              <h1 className={`${activeBg === 3 ? 'text-white' : '' }  lg:text-lg  font-bold mt-2`}>Emergency</h1>
              <p className={`${activeBg === 3 ? 'text-white' : '' } mt-1`}>(237) 681-812-255</p>
              <p className={`${activeBg === 3 ? 'text-white' : '' } mt-1`}>(237) 666-331-894</p>
            </div>
          </div>
          <div 
            onClick={() => handleBg(4)}
           className={`flex flex-col items-center w-full px-0 flex-wrap `}>
            <div className={`${activeBg === 4 ? 'bg-[#1F2B6C]' : 'bg-[#BFD2F8]'} transition-all duration-500 ease-in-out p-[20px] w-full lg:w-[200px] rounded-lg`}>
              <div className="lg:w-12 lg:h-12 lg:justify-center lg:items-center w-full rounded-full flex md:justify-center md:items-center transition-colors duration-300 ">
                <img src={img4} className={`w-6 h-6 ${activeBg === 4 ? 'filter brightness-0 invert' : 'filter invert-[25%] sepia-[80%] saturate-[500%] hue-rotate-[180deg]'}`}/>
              </div>
              <h1 className={`${activeBg === 4 ? 'text-white' : '' }  lg:text-lg  font-bold mt-2`}>Emergency</h1>
              <p className={`${activeBg === 4 ? 'text-white' : '' } mt-1`}>(237) 681-812-255</p>
              <p className={`${activeBg === 4 ? 'text-white' : '' } mt-1`}>(237) 666-331-894</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}