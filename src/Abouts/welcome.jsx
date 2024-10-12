import img from '../images/welcome.png'
export const Welcome = () => {
    return(
<div className='h-auto'>
<div className="container mx-auto p-4 md:p-[100px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="h-auto md:h-[509px]">
      <img src={img} className="w-full h-full  " />
    </div>
    <div>
      <h1 className="text-2xl font-bold text-[#159EEC]">Welcome to Hostipal Name</h1>
      <h1 className='font-yeseva font-bold text-[#1F2B6C] text-4xl  tracking-widest'>Best Care for Your<br/>
        Good Health</h1>
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
</div>
    )
}