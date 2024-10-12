import img from '../images/check1.png'

import img1 from '../images/check2.png'
import img2 from '../images/check3.png'
import img3 from '../images/check4.png'
export const SingleCheckup = () => {
    return(
      <div className='h-auto bg-gray-100'>
      <div className='container mx-auto p-4 md:p-[100px] lg:p[100px] '>
      <div className="flex justify-center  py-8">
   
   <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
     
     
     <div className=" space-y-8">
 <div className="border-[#BFD2F8] border-2 shadow-lg rounded-lg p-6">
  <ul className="space-y-6">
    <li className="flex items-center bg-blue-600 text-white w-full p-4 rounded-lg">
      <img src={img1} alt="Icon" className="w-6 h-6 mr-4" />
      <span>Free Checkup</span>
    </li>
    <li className="flex items-center p-4">
      <img src={img1} alt="Icon" className="w-6 h-6 mr-4" />
      <span>Cardiology</span>
    </li>
    <li className="flex items-center p-4">
      <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
      <span>DNA Testing</span>
    </li>
    <li className="flex items-center p-4">
      <img src={img3} alt="Icon" className="w-6 h-6 mr-4" />
      <span>Blood Bank</span>
    </li>
    <li className="flex items-center p-4">
      <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
      <span>Surgery</span>
    </li>
    <li className="flex items-center p-4">
      <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
      <span>Orthopedics</span>
    </li>
  </ul>
</div>


  
  
     </div>
  
  
     <div className="col-span-2">
     
    <img src={img} alt="Doctor and Patient" className="w-full h-64 object-cover rounded-lg mb-6" />
    <h2 className="text-2xl font-bold mb-4">A passion for putting patients first</h2>
    <ul className="grid grid-cols-2 gap-4 mb-5 mt-5">
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Passion for Healing</span>
  </li>
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>All our best</span>
  </li>
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Legacy of Excellence</span>
  </li>
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>5-Star Care</span>
  </li>
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>Believe in Us</span>
  </li>
  <li className="flex items-center mb-2">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Legacy of Excellence</span>
  </li>
</ul>
    <p className="text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
    </p>
    <p className='text-gray-700 py-2'>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
    </p>
  </div>
   
    
     </div>
   </div>
  </div>
      </div>
  

    )
}