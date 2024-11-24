import { useState, useRef, useEffect } from "react"
import Navbar from "./Navbar/Navbar";
import Info from './Info/Info';
const Scroll = () => {
    const [infoVisible, setInfoVisible] = useState(true);
    const [isNavbarFixed, setIsNavBarFixed] = useState(false);
    const infoRef = useRef(null);
    const lastScrollY = useRef(0)

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if(infoRef.current) {
                if(scrollY > infoRef.current.offsetHeight) {
                    setInfoVisible(false)
                }else{
                    setInfoVisible(true)
                }
            }

            if(scrollY > lastScrollY.current && scrollY >= infoRef.current.offsetHeight) {
                setIsNavBarFixed(true)
            }else {
                setIsNavBarFixed(false)
            }
            lastScrollY.current = scrollY;
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        },[infoRef])
    
  return (
    <div>
      <Info
        ref={infoRef}
        infoVisible={infoVisible}
      />
      <Navbar
        isNavbarFixed={isNavbarFixed}
      />
    </div>
  )
}

export default Scroll
