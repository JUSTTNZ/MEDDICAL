import img from '../images/check1.png'

import img1 from '../images/check2.png'
import img2 from '../images/check3.png'
import img3 from '../images/check4.png'
export const SingleCheckup = () => {
    return(
        <div className="flex h-screen bg-gray-50">

  <div className="w-1/4 bg-[#E5E5E5] text-white p-6">
    
    <ul className="space-y-6">
    <li className="flex items-center">
        <img src={img1} alt="Icon" className="w-6 h-6 mr-4" />
        <span>Free Checkup</span>
      </li>
      <li className="flex items-center">
        <img src={img1} alt="Icon" className="w-6 h-6 mr-4" />
        <span>Cardiology</span>
      </li>
      <li className="flex items-center">
        <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
        <span>DNA Testing</span>
      </li>
      <li className="flex items-center">
        <img src={img3} alt="Icon" className="w-6 h-6 mr-4" />
        <span>Blood Bank</span>
      </li>
      <li className="flex items-center">
        <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
        <span>Surgery</span>
      </li>
      <li className="flex items-center">
        <img src={img2} alt="Icon" className="w-6 h-6 mr-4" />
        <span>Orthopedics</span>
      </li>
    </ul>
  </div>

  
  <div className="w-3/4 p-8">
    <img src={img} alt="Doctor and Patient" className="w-full h-64 object-cover rounded-lg mb-6" />
    <h2 className="text-2xl font-bold mb-4">A passion for putting patients first</h2>
    <ul className="list-disc list-inside text-blue-500 grid grid-cols-2 gap-2 mb-6">
      <li>A Passion for Healing</li>
      <li>Better Care</li>
      <li>A Legacy of Excellence</li>
      <li>Always Caring</li>
      <li>At Our Best</li>
      <li>Excellence in Service</li>
    </ul>
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque dapibus.
      Vivamus placerat sapien placerat convallis felis vitae tortor augue. Velit nascetur massa in.
    </p>
  </div>
</div>

    )
}