import img from '../images/single.png'
import img2 from '../images/like.png'
import img3 from '../images/date.png'
import img4 from '../images/eye.png'
import img5 from '../images/author.png'

export const SingleNewsHero= () => {
    return(
        <div className="md:h-[250px] h-[150px] w-full flex flex-col  md:p-12 sm:p-4 xs:p-2" style={{backgroundImage:`URL(${img})`, backgroundSize:'cover'}}>
  <div className="md:p-12 md:pl-[150px] pl-[100px] mt-3 sm:pl-4 xs:pl-2">
    <nav className="text-sm breadcrumbs">
      <ul className="flex">
        <li className="mr-1 text-[#1F2B6C]">
          <a href="#" className=" ">Home</a>
        </li>
        <li className="mr-1 text-[#1F2B6C]">/</li>
        <li className="text-[#1F2B6C]">News</li>
        <li className="mr-1 text-[#1F2B6C]">/</li>
        <li className="text-[#1F2B6C]">Health care</li>
      </ul>
    </nav>
    <h2 className="text-2xl font-bold mt-4 text-[#1F2B6C] sm:text-xl xs:text-lg">A passion for putting patients first.</h2>
    <div className="flex gap-10">
  
  <div className="flex items-center gap-2">
    <img src={img3} alt="Date" className="w-4 h-4" />
    <span>Monday 05, September 2021</span>
  </div>


  <div className="flex items-center gap-2">
    <img src={img5} alt="Author" className="w-4 h-4" />
    <span>By Author</span>
  </div>

  <div className="flex items-center gap-2">
    <img src={img4} alt="Comments" className="w-4 h-4" />
    <span>68</span>
  </div>


  <div className="flex items-center gap-2">
    <img src={img2} alt="Views" className="w-4 h-4" />
    <span>86</span>
  </div>
</div>
  </div>
</div>
    )
}