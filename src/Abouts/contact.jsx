import img from '../images/call.png'
import img2 from '../images/location.png'
import img3 from '../images/mail.png'
import img4 from '../images/time.png'
import '../css/about.css'
export const Contact = () => {
    return(
      <div className="h-auto">
      <div className="container mx-auto p-4 md:p-[100px]">
        <div className="text-center mb-4">
          <h5 className="touch font-work-sans  text-[#159EEC] font-work-sans font-bold text-18 leading-none tracking-widest md:text-2xl sm:text-xl xs:text-lg">Get in touch</h5>
          <h5 className="contact font-yeseva-one text-[#1F2B6C] font-bold md:text-2xl sm:text-xl xs:text-lg">Contact Us</h5>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#BFD2F8] p-[20px] w-full md:w-[200px] lg:w-[200px] rounded-lg">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <img src={img} className="w-6 h-6" />
              </div>
              <h1 className="text-lg font-bold mt-2">Emergency</h1>
              <p className="text-sm mt-1">(237) 681-812-255</p>
              <p className="text-sm mt-1">(237) 666-331-894</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#1F2B6C] p-[20px] w-full md:w-[200px] lg:w-[200px] rounded-lg">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <img src={img2} className="w-6 h-6" />
              </div>
              <h1 className="text-lg font-bold mt-2">Location</h1>
              <p className="text-sm mt-1">0123 Some place</p>
              <p className="text-sm mt-1">9876 Some country</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#BFD2F8] p-[20px] w-full md:w-[200px] lg:w-[200px] rounded-lg">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <img src={img3} className="w-6 h-6" />
              </div>
              <h1 className="text-lg font-bold mt-2">Email</h1>
              <p className="text-sm mt-1">fildineeesoe@gmail.com</p>
              <p className="text-sm mt-1">myebstudios@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="bg-[#BFD2F8] p-[20px] w-full md:w-[200px] lg:w-[200px] rounded-lg">
              <div className="w-12 h-12 rounded-full flex justify-center items-center">
                <img src={img4} className="w-6 h-6" />
              </div>
              <h1 className="text-lg font-bold mt-2">Working Hours</h1>
              <p className="text-sm mt-1">Mon-Sat 09:00-20:00</p>
              <p className="text-sm mt-1">Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}