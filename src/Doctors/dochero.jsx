
export const DocHero= () => {
    return(
        <div className="md:h-[250px] h-[150px] w-full flex flex-col abthero-bg md:p-12 sm:p-4 xs:p-2">
  <div className="md:p-12 md:pl-[150px] pl-[100px] mt-3 sm:pl-4 xs:pl-2">
    <nav className="text-sm breadcrumbs">
      <ul className="flex">
        <li className="mr-1 text-[#1F2B6C]">
          <a href="#" className=" ">Home</a>
        </li>
        <li className="mr-1 text-[#1F2B6C]">/</li>
        <li className="text-[#1F2B6C]">Doctors</li>
      </ul>
    </nav>
    <h2 className="text-2xl font-bold mt-4 text-[#1F2B6C] sm:text-xl xs:text-lg">Our Doctors</h2>
  </div>
</div>
    )
}