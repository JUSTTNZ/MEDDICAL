import fb from '../images/fb1.png'
import ig from '../images/ig1.png'
import inl from '../images/in1.png'
import img from '../images/doc1.png'
import img1 from '../images/doc2.png'
import img2 from '../images/doc3.png'

export const Doctors = () => {
    return(
      <div className="h-auto w-[2000px]">
      <div className="container mx-auto p-4 md:p-[100px]">
        <div className='text-center mb-4'>
          <h5 className='care text-2xl'>Trusted Care</h5>
          <h5 className='text-2xl font-bold doc-heading'>Our Doctors</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="flex flex-col w-full h-74 card-color rounded shadow-md">
            <img src={img2} className='w-full h-74 object-cover rounded-t' />
            <div className='px-4 py-2'>
              <h5 className='doc text-1xl text-center'>Doctor’s Name</h5>
              <h6 className='text-2xl text-center neuro tracking-widest'>Neurology</h6>
            </div>
            <div className='flex justify-center items-center px-4 py-2'>
              <div className='flex gap-2 items-center'>
                <div>
                  <img src={fb} className='fb' />
                </div>
                <div>
                  <img src={ig} className='ig' />
                </div>
                <div>
                  <img src={inl} className='in' />
                </div>
              </div>
            </div>
            <button className='w-full py-2 btn-color text-white font-bold rounded-b'>
              View Profile
            </button>
          </div>
          <div className="flex flex-col w-full h-74 card-color rounded shadow-md hidden md:block">
            <img src={img} className='w-full h-74 object-cover rounded-t' />
            <div className='px-4 py-2'>
              <h5 className='doc text-1xl text-center'>Doctor’s Name</h5>
              <h6 className='text-2xl text-center neuro tracking-widest'>Neurology</h6>
            </div>
            <div className='flex justify-center items-center px-4 py-2'>
              <div className='flex gap-2 items-center'>
                <div>
                  <img src={fb} className='fb' />
                </div>
                <div>
                  <img src={ig} className='ig' />
                </div>
                <div>
                  <img src={inl} className='in' />
                </div>
              </div>
            </div>
            <button className='w-full py-2  btn-color text-white font-bold rounded-b'>
              View Profile
            </button>
          </div>
          <div className="flex flex-col w-full h-74 card-color rounded shadow-md hidden md:hidden lg:block">
            <img src={img1} className='w-full h-74 object-cover rounded-t' />
            <div className='px-4 py-2'>
              <h5 className='doc text-1xl text-center'>Doctor’s Name</h5>
              <h6 className='text-2xl text-center neuro tracking-widest'>Neurology</h6>
            </div>
            <div className='flex justify-center items-center px-4 py-2'>
              <div className='flex gap-2 items-center'>
                <div>
                  <img src={fb} className='fb' />
                </div>
                <div>
                  <img src={ig} className='ig' />
                </div>
                <div>
                  <img src={inl} className='in' />
                </div>
              </div>
            </div>
            <button className='w-full py-2 btn-color text-white font-bold rounded-b'>
              View Profile
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            <button className="w-2 h-2 rounded-full bg-gray-400" onClick={() => {
              // toggle visibility of doctor 1
            }}></button>
            <button className="w-2 h-2 rounded-full bg-gray-400" onClick={() => {
              // toggle visibility of doctor 2
            }}></button>
            <button className="w-2 h-2 rounded-full bg-gray-400" onClick={() => {
              // toggle visibility of doctor 3
            }}></button>
          </div>
        </div>
      </div>
    </div>
    )
}