import img from '../images/welcome.png'
export const Welcome = () => {
    return(
 <div className='h-auto mb-4 p-[100px]'>
           <div className="grid grid-cols-2 gap-4">
  <div className="col-span-1 h-[509px]">
    <img src={img} className="w-full h-full  " />
  </div>
  <div className="col-span-1">
    <h1 className="text-2xl font-bold text-[#159EEC]">Welcome to Hostipal Name</h1>
<h1 className='font-yeseva font-bold text-[#1F2B6C] text-4xl  tracking-widest'>Best Care for Your<br/>
Good Health</h1>
<ul className="flex flex-wrap justify-center mb-2 mt-2 items-center">
  <li className="w-1/2 pr-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Passion for Healing</span>
  </li>
  <li className="w-1/2 pr-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span >All our best</span>
  </li>
  <li className="w-1/2 pr-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Passion for Healing</span>
  </li>
  <li className="w-1/2 pl-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>5-Star Care</span>
  </li>
  <li className="w-1/2 pl-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>Believe in Us</span>
  </li>
  <li className="w-1/2 pl-4 mb-2 flex items-center">
    <span className="bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
    <span>A Legacy of Excellence</span>
  </li>
</ul>
<div>
    <p className='font-[work-sans] px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
     Velit nascetur proin massa in. Consequat faucibus 
     porttitor enim et.</p>
     <p className='font-[work-sans] py-2 px-2'>
     Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit. Quisque
      placerat scelerisque. Convallis felis vitae 
      tortor augue. 
     Velit nascetur proin massa in.
     </p>
</div>
  </div>
</div>
 </div>
    )
}