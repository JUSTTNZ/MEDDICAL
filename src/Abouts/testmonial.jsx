import img from '../images/test.png'
export const Testmonial= () => {
    return(
        <div className="h-[441px] flex flex-col justify-center items-center test-bg p-12">
  <div className='w-[658px] h-[313]'>
  <div className="text-center">
    <img src={img} className="w-[45px] h-[30px] mx-auto" />
  </div>
  <div className='flex justify-center'>
  <p className="text-lg text-gray-600 mt-4 text-[#FCFEFE] ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
  </p>
  </div>
  <hr className='mt-5 '  />
  <h2 className="text-1xl  mt-4 text-center text-[#FCFEFE] font-[work sans]">John Doe</h2>
  <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            <button className="w-[18px] h-[18px] rounded-full bg-gray-400"></button>
            <button className="w-[18px] h-[18px] rounded-full bg-gray-400"></button>
            <button className="w-[18px] h-[18px] rounded-full bg-gray-400"></button>
          </div>
        </div>
  </div>
</div>
    )
}