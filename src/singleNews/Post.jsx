

import { SidebarNews } from '../News/sidebarnews'
import { SingleBlogpost } from './singleblog'
export const BlogSingle = () => {
    return(
 

<div className='h-auto bg-gray-100'>
    <div className='container mx-auto p-4 md:p-[100px] lg:p[100px] '>
    <div className="flex justify-center  py-8">
 
 <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
   
   
   <div className="col-span-2 space-y-8">
   
   <SingleBlogpost />


<nav className="flex justify-between">
  <div
    className="px-4 py-2 text-[#1F2B6C] bg-[#BFD2F8] border-1 rounded-full"
    disabled
  >
← Previous Article
  </div>
 
  <button
    className="px-4 py-2 text-[#1F2B6C] bg-[#BFD2F8]  rounded-full"
    disabled
  >
    Next Article →
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