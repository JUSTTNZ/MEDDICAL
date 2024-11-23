import { useState} from 'react'
import { News } from '../Abouts/news'
import backgroundImage from '../assets/contactsassets/Rectangle 3.svg'
import rectangle from '../assets/contactsassets/Group 184 (1).svg'
import map from '../assets/contactsassets/Mapview.svg'
import img from '../images/call.png'
import img2 from '../images/location.png'
import img3 from '../images/mail.png'
import img4 from '../images/time.png'
const Contacts = () => {
  const [activeBg, setActiveBg] = useState(1);
  const handleBg = (index) => {
    setActiveBg((prevActiveBg) => (prevActiveBg === index ? 1 : index))
  }
  return (
    <>
     <div>
        <div className="relative h-[400px] bg-cover w-full bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-white opacity-40"></div>
        
        {/* Content goes here */}
        <div className="relative z-10 p-4 flex flex-col justify-center  h-full pl-8 md:pl-[450px]">
            <p className='text-primary font-yeseva text-lg'>Home / Contact</p>
            <h3 className="text-primary font-yeseva text-4xl">Our Contacts</h3>
        </div>
        </div>
        <div>
          <img src={rectangle} alt=""  className=' w-full'/>
        </div>

        <div className="flex justify-center px-6 py-6 md:m-16">
          <img src={map} alt="" className=" w-full my-0 md:w-[1500px] md:mx-auto " />
        </div>


        <div className=" flex items-center justify-center bg-gray-100 p-6 md:mt-24 mb-24">
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
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-4 mx-4 mt-16">
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

<News/>



     </div> 
    </>
  )
}

export default Contacts
