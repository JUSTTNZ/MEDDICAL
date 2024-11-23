/* eslint-disable react/no-unknown-property */
import img2 from '../images/news3.png'
import img3 from '../images/news4.png'
import img4 from '../images/news5.png'
import img5 from '../images/news6.png'
import img1 from '../images/news2.png'
export const SidebarNews = () => {
    return(
        <section className='space-y-8'>
               <div className="relative mt-4">
  <input type="text" id="first_name" className="bg-blue-900 text-white flex items-center p-2 rounded-md 
  text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500
    block w-full p-2.5 "  placeholder="Search" />
<svg className="w-6 h-6 absolute right-3 top-2 text-[#FFF]  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
</div>
      <div className="border-[#BFD2F8] border-2 shadow-lg rounded-lg p-6">

        <h3 className="text-3xl font-bold mb-4 text-[#1F2B6C] font-yeseva tracking-widest  ">Recent Posts</h3>
        <ul className="space-y-4">
        <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img2} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img3} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img4} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img5} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img1} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-4">
              <img src={img2} alt="Recent Post" className="w-12 h-12 object-cover rounded-lg" />
              <div className="flex flex-col">
                <span className="text-blue-600 hover:text-blue-800 text-sm">Monday 05, September 2021</span>
                <span className='text-sm'>This Article’s Title goes Here, 
but not too long.</span>
              </div>
            </a>
          </li>
        </ul>
      </div>


      <div className="border-[#BFD2F8] border-2 shadow-lg rounded-lg p-6">
        <h3 className="text-3xl font-bold mb-4 text-[#1F2B6C] font-yeseva tracking-widest">Categories</h3>
        <ul className=" list-inside text-gray-700 ">
  <li className='mb-3 flex justify-between items-center'>Health & Wellness <span className="bg-[#159EEC] rounded-full w-5 h-5 text-white text-xs flex justify-center item-center ">3</span></li>
  <li className='mb-3 flex justify-between items-center'>Medical Tips <span className="bg-[#159EEC] rounded-full w-5 h-5 text-white text-xs flex justify-center item-center">20</span></li>
  <li className='mb-3 flex justify-between items-center'>Patient Stories <span className="bg-[#159EEC] rounded-full w-5 h-5 text-white text-xs flex justify-center item-center">20</span></li>
  <li className='mb-3 flex justify-between items-center'>Updates & News <span className="bg-[#159EEC] rounded-full w-5 h-5 text-white text-xs flex justify-center item-center">30</span></li>
</ul>
      </div>
        </section>
    )
}