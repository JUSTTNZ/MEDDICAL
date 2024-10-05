import '../css/footer.css'
import img from '../images/fb.png'
import img1 from '../images/ig.png'
import img2 from '../images/in.png'
export const Footer = () => {
    return(
        <div className="h-auto  footer-bg">
            <div className="container mx-auto  ">
 <div className="grid grid-cols-4  p-12 footer-left">
    <div className="flex flex-col ">
        <h4 className='big-med'>Meddical</h4>
        <p className='footer-p mt-4'>Leading the Way in Medical
        Execellence, Trusted Care.</p>
    </div>
    <div className="flex flex-col ">
        <h5 className='footer-h'>Important Links</h5>
        <ul className='mt-4'>
          <li className='footer-links'>Appointment</li>
          <li className='footer-links'>Doctors</li>
          <li className='footer-links'>Services</li>
          <li className='footer-links'>About Us</li>
        </ul>
    </div>
    <div className="flex flex-col ">
        <h5 className='footer-h'>Contact Us</h5>
        <ul className='mt-4'>
          <li className='footer-links'>Call: (237) 681-812-255</li>
          <li className='footer-links'>Email: fildineesoe@gmail.com</li>
          <li className='footer-links'>Address: 0123 Some place</li>
          <li className='footer-links'>Some country</li>
        </ul>
    </div>
    <div className="flex flex-col ">
        <h5 className='footer-h'>Newsletter</h5>
        <div className="relative mt-4">
  <input type="text" id="first_name" className="bg-gray-50  input-color
  text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500
    block w-full p-2.5 "  placeholder="Enter your email address" />
  <svg className="absolute right-3 top-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7454 0.4346L20.7379 0.437519L1.14093 8.54447C0.975656 8.61221 0.829751 8.71987 0.716266 8.85781C0.60278 8.99574 0.525253 9.15965 0.490619 9.33488C0.452396 9.51838 0.460391 9.7085 0.513886 9.88814C0.567382 10.0678 0.664698 10.2313 0.797081 10.364L4.47132 14.0382C4.65256 14.2193 4.89131 14.3315 5.14643 14.3555C5.40154 14.3795 5.65703 14.3137 5.86886 14.1695L14.8206 8.01149C14.8559 7.98743 14.8985 7.97645 14.9411 7.98045C14.9836 7.98444 15.0234 8.00316 15.0536 8.03338C15.0838 8.06359 15.1026 8.1034 15.1066 8.14594C15.1105 8.18849 15.0996 8.23109 15.0755 8.26641L8.9178 17.2178C8.77358 17.4295 8.70768 17.6849 8.73148 17.9399C8.75527 18.1949 8.86725 18.4337 9.04814 18.615L12.723 22.2899C12.8495 22.4166 13.0054 22.5098 13.1768 22.5613C13.3482 22.6128 13.5298 22.621 13.7051 22.585C13.9166 22.5424 14.1109 22.4384 14.2636 22.286C14.3696 22.1798 14.4533 22.0536 14.5098 21.9146L22.6492 2.35069L22.6524 2.34161C22.7587 2.07503 22.7846 1.78313 22.7267 1.50203C22.6689 1.22092 22.5299 0.962945 22.327 0.760013C22.1241 0.557082 21.8661 0.418101 21.585 0.360263C21.3039 0.302426 21.012 0.32827 20.7454 0.4346Z" fill="#1F2B6C"/>
  </svg>
</div>
         
    </div>
 </div>
 <hr  className='line'/>
 <div className='flex justify-between p-12'>
  <div>
    <p className='reserved'>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
  </div>
  <div className='flex gap-2'>
    <div>
      <img src={img} className='fb' />
    </div>
    <div>
      <img src={img1} className='ig' />
    </div>
    <div>
      <img src={img2} className='in' />
    </div>
  </div>
</div>
            </div>

        </div>
      
    )

}