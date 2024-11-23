import { SidebarNews } from './sidebarnews'
import { Blogpost, Blogpost2, Blogpost3 } from './blogpost'
export const Blog = () => {
    return(
 

<div className='h-auto bg-gray-100'>
    <div className='container mx-auto p-4 md:p-[100px] lg:p[100px] '>
    <div className="flex justify-center  py-8">
 
 <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
   
   
   <div className="col-span-2 space-y-8">
   
   <Blogpost />
    <Blogpost2 />
    <Blogpost3 />

<nav className="flex justify-between">
  <div
    className="px-4 py-2 text-[#159EEC]  rounded-lg"
    disabled
  >
← Previous Page
  </div>
  <div className="flex space-x-1">
    <button className="px-1 py-2 text-dark rounded-lg">1</button>
    <button className="px-1 py-2 text-[#159EEC] rounded-lg">2</button>
    <button className="px-1 py-2 text-[#159EEC] rounded-lg">3</button>
    <button className="px-1 py-2 text-[#159EEC]  rounded-lg">4</button>
    <button className="px-1 py-2 text-[#159EEC]  rounded-lg">5</button>
  </div>
  <button
    className="px-4 py-2 text-[#159EEC]  rounded-lg"
    disabled
  >
    Next Page →
  </button>
</nav>
   </div>


   <div className="">
 
 <SidebarNews />
  
   </div>
 </div>
</div>
    </div>
</div>

    )
}