import img from '../images/service.png'
export const SerivceHero= () => {
    return(
        <div className="lg:h-[400px] h-[150px] w-full flex flex-col  lg:p-12 " style={{backgroundImage:`URL(${img})`, backgroundSize:'cover'}}>
  <div className="md:p-12 md:pl-[150px] pl-[100px] mt-3 sm:pl-4 xs:pl-2">
    <nav className="text-sm breadcrumbs">
      <ul className="flex">
        <li className="mr-1 text-[#1F2B6C]">
          <a href="#" className=" font-yeseva text-lg">Home</a>
        </li>
        <li className="mr-1 text-[#1F2B6C] ">/</li>
        <li className="text-[#1F2B6C] text-lg  font-yeseva">Services</li>
      </ul>
    </nav>
    <h2 className=" font-bold mt-4 text-[#1F2B6C] font-yeseva text-4xl">Our Services</h2>
  </div>
</div>
    )
}