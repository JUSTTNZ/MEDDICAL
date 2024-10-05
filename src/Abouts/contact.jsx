import img from '../images/call.png'
import img2 from '../images/location.png'
import img3 from '../images/mail.png'
import img4 from '../images/time.png'
import '../css/about.css'
export const Contact = () => {
    return(
        <div className="h-auto ">
        <div className="container mx-auto  ">
        <div className='text-center mb-4'>
            <h5>Get in touch</h5>
  <h5 className='text-lg font-bold'>Contact Us</h5>
</div>
<div className="grid grid-cols-4   p-12 ">
<div className='flex flex-col items-center '>
  <div className="big-blue-bg">
  <div className='w-12 h-12  rounded-full flex justify-center items-center'>
  <img src={img} className='w-6 h-6' />
  </div>
  <h1 className='text-lg font-bold mt-2'>Emergency</h1>
  <p className='text-sm mt-1'>(237) 681-812-255</p>
  <p className='text-sm mt-1'>(237) 666-331-894</p>
  </div>
</div>
<div className='flex flex-col items-center '>
  <div className="big-blue-b">
  <div className='w-12 h-12  rounded-full flex justify-center items-center'>
  <img src={img2} className='w-6 h-6' />
  </div>
  <h1 className='text-lg font-bold mt-2'>Location</h1>
  <p className='text-sm mt-1'>0123 Some place</p>
  <p className='text-sm mt-1'>9876 Some country</p>
  </div>
</div>
<div className='flex flex-col items-center '>
  <div className="big-blue-bg">
  <div className='w-12 h-12  rounded-full flex justify-center items-center'>
  <img src={img3} className='w-6 h-6' />
  </div>
  <h1 className='text-lg font-bold mt-2'>Email</h1>
  <p className='text-sm mt-1'>fildineeesoe@gmail.com</p>
  <p className='text-sm mt-1'>myebstudios@gmail.com</p>
  </div>
</div>
<div className='flex flex-col items-center '>
  <div className="big-blue-bg">
  <div className='w-12 h-12  rounded-full flex justify-center items-center'>
  <img src={img4} className='w-6 h-6' />
  </div>
  <h1 className='text-lg font-bold mt-2'>Working Hours</h1>
  <p className='text-sm mt-1'>Mon-Sat 09:00-20:00</p>
  <p className='text-sm mt-1'>Sunday Emergency only</p>
  </div>
</div>
</div>

        </div>

    </div>
    )
}