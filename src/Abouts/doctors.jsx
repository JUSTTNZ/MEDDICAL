import fb from '../images/fb.png'
import ig from '../images/ig.png'
import inl from '../images/in.png'
import img from '../images/doc1.png'
import img1 from '../images/doc2.png'
import img2 from '../images/doc3.png'
export const Doctors = () => {
    return(
        <div className="h-auto ">
        <div className="container mx-auto p-12  ">
        <div className='text-center mb-4'>
            <h5>Trusted Care</h5>
  <h5 className='text-lg font-bold'>Our Doctors</h5>
</div>
<div className="grid grid-cols-3   p-12 ">
<div className='flex flex-col w-48 h-74 bg-white rounded shadow-md'>
  <img src={img2} className='w-full h-52 object-cover rounded-t' />
  <div className='px-4 py-2'>
    <h5 className='text-lg '>Doctor’s Name</h5>
  </div>
  <div className='px-4 py-2'>
    <h6 className='text-lg '>Neurology</h6>
  </div>
  <div className='flex justify-center   items-center'>
  <div className='flex gap-2  items-center'>
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

  <button className='w-full py-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-b'>
    Learn More
  </button>
</div>
<div className='flex flex-col w-48 h-74 bg-white rounded shadow-md'>
  <img src={img} className='w-full h-52 object-cover rounded-t' />
  <div className='px-4 py-2'>
    <h5 className='text-lg '>Doctor’s Name</h5>
  </div>
  <div className='px-4 py-2'>
    <h6 className='text-lg '>Neurology</h6>
  </div>
  <div className='flex justify-center   items-center'>
  <div className='flex gap-2  items-center'>
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

  <button className='w-full py-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-b'>
    Learn More
  </button>
</div>
<div className='flex flex-col w-48 h-74 bg-white rounded shadow-md'>
  <img src={img1} className='w-full h-52 object-cover rounded-t' />
  <div className='px-4 py-2'>
    <h5 className='text-lg '>Doctor’s Name</h5>
  </div>
  <div className='px-4 py-2'>
    <h6 className='text-lg '>Neurology</h6>
  </div>
  <div className='flex justify-center   items-center'>
  <div className='flex gap-2  items-center'>
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

  <button className='w-full py-2 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-b'>
    Learn More
  </button>
</div>
</div>

        </div>

    </div>
    )
}