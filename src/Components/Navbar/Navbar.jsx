import React, { useState } from 'react';
import hamburger from "../../assets/homeassets/Vector (9).svg";
import search from '../../assets/homeassets/search.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-primary p-4 text-white">
        <div className="flex justify-between items-center">
          {/* Full Menu for larger screens */}
          <div className="hidden lg:flex justify-around gap-20 pr-16 w-full">
            <ul className="flex space-x-10 text-lg gap-10 leading-loose">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>News</li>
              <li>Contact</li>
            </ul>

            <div className="flex space-x-6">
              <img src={search} alt="Search" />
              <p className="bg-tertiary py-2 px-4 rounded-full text-primary">Appointment</p>
            </div>
          </div>

          {/* Search and Hamburger Icon for Mobile */}
          <div className="lg:hidden flex space-x-4 ml-auto">
            {/* Search icon */}
            <img src={search} alt="Search" className="w-8 h-8" />
            {/* Hamburger icon */}
            <button onClick={toggleMenu}>
              <img src={hamburger} alt="Menu" className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
            <div className="flex mt-4 space-x-6">
              <p className="bg-tertiary py-2 px-4 rounded-full text-primary">Appointment</p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
