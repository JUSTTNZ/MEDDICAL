
import { Doctors } from '../Abouts/doctors'
import { News } from '../Abouts/news'
import { Contact } from "../Abouts/contact"
import hamburger from "../assets/homeassets/Vector (9).svg"
import calendar from '../assets/homeassets/39.-Calendar.svg'
import team from '../assets/homeassets/27.-Team.svg'
import cash from '../assets/homeassets/15.-Cash.svg'
import vector from '../assets/homeassets/Vector.svg'
import group183 from '../assets/homeassets/Group 183.svg'

import vector5 from '../assets/homeassets/Vector (5).svg'
import vector4 from '../assets/homeassets/Vector (4).svg'
import appointment_form from '../assets/homeassets/Appointment Form.svg'

const Home = () => {
  return (
    <>
      <div className="bg-background">
        <div className="bg-custom-homepage-image bg-cover bg-right bg-no-repeat h-screen flex flex-col justify-center p-4 sm:p-8 lg:p-[200px]">
          <h3 className="font-yeseva text-secondary text-3xl sm:text-4xl lg:text-5xl pl-4 lg:pl-24">CARING FOR LIFE</h3>
          <h2 className="font-yeseva text-primary text-4xl sm:text-5xl lg:text-6xl align-center pl-4 lg:pl-24">
            Leading the Way <br /> in Medical Excellence
          </h2>
        
        </div>

        <div className="flex flex-col md:flex-row justify-evenly text-lg relative bottom-12 z-50 p-4 mb-4 lg:gap-8">
          <div className="bg-primary mt-2  flex items-center px-8 md:px-16 py-4 md:py-6 gap-4 md:gap-16 leading-loose text-white rounded">
            <p>Book an Appointment</p>
            <img src={calendar} alt="" className="w-10 md:w-14" />
          </div>
          <div className="bg-tertiary mt-2  flex items-center px-8 md:px-16 py-4 md:py-6 gap-4 md:gap-16 leading-loose text-primary rounded">
            <p>Book an Appointment</p>
            <img src={team} alt="" className="w-10 md:w-16" />
          </div>
          <div className="bg-secondary  mt-2 flex items-center px-8 md:px-16 py-4 md:py-6 gap-4 md:gap-16 leading-loose text-white rounded">
            <p>Book an Appointment</p>
            <img src={cash} alt="" className="w-10 md:w-16" />
          </div>
        </div>

        {/* After Hero Section */}
        <div className="bg-white relative bottom-24 pt-24 z-0 px-4 md:px-8 lg:ml-8">
          <div className="flex flex-col text-center">
            <h3 className="text-secondary text-2xl font-yeseva pb-3">WELCOME TO MEDDICAL</h3>
            <h2 className="text-primary text-3xl md:text-4xl font-yeseva pb-3">A Great Place to Receive Care</h2>
            <p className="text-primary font-yeseva text-sm md:text-base lg:text-lg pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
              Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="flex justify-center gap-4 pb-8">
              <span className="text-secondary">Learn More</span>
              <img src={vector} alt="" />
            </div>
          </div>

          {/* Doctors Section */}
          <div className="flex flex-col justify-center align-center text-center pt-8 pb-12">
            <img src={group183} alt="" className="w-full max-w-[1900px] mx-auto" />
            <p className="text-secondary text-2xl font-yeseva pt-16 pb-3">CARE YOU CAN BELIEVE IN</p>
            <h3 className="text-primary text-3xl md:text-4xl font-yeseva pb-3">Our Services</h3>
          </div>
          
          {/* Services List */}
          <div className="flex flex-col items-center mt-24 pb-16">
  <div className="text-center mb-8 font-yeseva space-y-4">
    <h3 className="text-2xl sm:text-3xl text-secondary font-bold">ALWAYS CARING</h3>
    <h2 className="text-3xl sm:text-4xl text-primary font-bold">Our Specialties</h2>
  </div>
  <div className="w-full max-w-[1900px] px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Neurology" className="h-24 mb-2" />
        <p className="text-lg">Neurology</p>
      </div>
      <div className="flex flex-col items-center bg-primary text-tertiary border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector5} alt="Bones" className="h-24 mb-2" />
        <p className="text-lg">Bones</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Oncology" className="h-24 mb-2" />
        <p className="text-lg">Oncology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Otorhinolaryngology" className="h-24 mb-2" />
        <p className="text-lg">Otorhinolaryngology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Ophthalmology" className="h-24 mb-2" />
        <p className="text-lg">Ophthalmology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Cardiovascular" className="h-24 mb-2" />
        <p className="text-lg">Cardiovascular</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Pulmonology" className="h-24 mb-2" />
        <p className="text-lg">Pulmonology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Renal Medicine" className="h-24 mb-2" />
        <p className="text-lg">Renal Medicine</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Gastroenterology" className="h-24 mb-2" />
        <p className="text-lg">Gastroenterology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Urology" className="h-24 mb-2" />
        <p className="text-lg">Urology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Dermatology" className="h-24 mb-2" />
        <p className="text-lg">Dermatology</p>
      </div>
      <div className="flex flex-col items-center border border-gray-300 border-opacity-50 h-48 justify-center">
        <img src={vector4} alt="Gynecology" className="h-24 mb-2" />
        <p className="text-lg">Gynecology</p>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Appointment Section */}
        <div className="relative bg-custom-appointments-image bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-white opacity-40"></div>
          <div className="relative lg:max-w-[1900px] w-full mx-auto flex flex-col lg:flex-row p-4 sm:p-8 lg:min-h-[900px]">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl text-secondary font-yeseva font-bold mb-4">Book an Appointment</h2>
              <p className="text-gray-700 text-lg sm:text-xl font-yeseva">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex-1 flex justify-center mt-8 lg:mt-0">
              <img src={appointment_form} alt="Appointment Form" className="lg:w-3/4 w-2/3 h-auto" />
            </div>
          </div>
        </div>

       
          <div className="">
            <Doctors />
          </div>
      

      
          <div className="">
            <News />
          </div>
      

        
          <div className="">
            <Contact />
          </div>
        


      </div>
    </>
  );
};

export default Home;
