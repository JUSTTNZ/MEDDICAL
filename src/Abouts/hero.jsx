
export const AboutHero= () => {
    return(
        <div className="lg:h-[400px] h-[150px] w-full flex justify-center items-center flex-col abthero-bg md:p-12 sm:p-4 xs:p-2">
  <div className="md:p-12 md:pl-[150px] pl-[100px] mt-3 sm:pl-4 xs:pl-2">
    <nav className="text-sm breadcrumbs">
      <ul className="flex">
        <li className="mr-1 text-[#1F2B6C]">
          <a href="#" className=" text-lg  font-yeseva">Home</a>
        </li>
        <li className="mr-1 text-[#1F2B6C]">/</li>
        <li className="text-[#1F2B6C] text-lg  font-yeseva">About</li>
      </ul>
    </nav>
    <h2 className=" font-bold mt-4 text-[#1F2B6C] text-4xl">About us</h2>
  </div>
</div>
    )
}