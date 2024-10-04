export const Footer = () => {
    return(
//         <div className="h-auto p-8  bg-gray-100">
//             <div className="container mx-auto">
//  <div className="grid grid-cols-4">
//     <div className="flex flex-col items-center">
//         ok
//     </div>
//     <div className="flex flex-col items-center">
//         ok
//     </div>
//     <div className="flex flex-col items-center">
//         ok
//     </div>
//     <div className="flex flex-col items-center">
//         ok
//     </div>
//  </div>
//             </div>

        // </div>
        <div className="bg-gray-100 h-auto p-4 md:p-5 lg:p-3" id='stack' >
        <div className="container mx-auto">
          <div className="flex items-center mb-4 md:ml-8">
            <h2 className="text-1xl font-semibold mr-4">TECH STACK</h2>
            <div className="flex-1"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12">
        {/* Column 1 */}
        <div className="flex flex-col items-center p-4">
          <img 
            
            alt="html" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">Html</p>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col items-center p-4">
          <img 
            
            alt="css" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">Css</p>
        </div>
        
        {/* Column 3 */}
        <div className="flex flex-col items-center p-4">
          <img 
        
            alt="js" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">Javascript</p>
        </div>
        
        {/* Column 4 */}
        <div className="flex flex-col items-center p-4">
          <img 
            
            alt="tailwind" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">Tailwindcss</p>
        </div>
        
        {/* Column 5 */}
        <div className="flex flex-col items-center p-4">
          <img 
        
            alt="react" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">ReactJs</p>
        </div>
        
        {/* Column 6 */}
        <div className="flex flex-col items-center p-4">
          <img 
            
            alt="py" 
            className="h-20 w-20 object-cover mb-2"
          />
          <p className="text-gray-700 font-semibold">Python</p>
        </div>
      </div>
      
        </div>
      </div>
    )

}