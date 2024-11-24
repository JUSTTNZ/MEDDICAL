/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/homeassets/Meddical.svg';
import call from '../../assets/homeassets/call.svg';
import clock from '../../assets/homeassets/clock.svg';
import location from '../../assets/homeassets/location.svg';

const Info = React.forwardRef(({ infoVisible }, ref) => {
  return (
    <>
      {/*info components*/}
      <div
      ref={ref}
       className={`bg-white p-4 lg:p-8 flex flex-col lg:flex-row justify-around items-center text-lg transition-opacity duration-500 ease-in-out ${infoVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo */}
        <img src={logo} alt="logo" className="h-6 lg:h-8  mb-4 lg:mb-0" />

        {/* Info Section */}
        <div className="flex flex-col lg:flex-row items-center lg:px-16 space-y-4 lg:space-y-0 lg:space-x-16 text-base lg:text-lg">
  
  {/* Emergency Info */}
  <div className="flex items-center space-x-3 w-full lg:w-1/3">
    <img src={call} alt="call" className="h-8 lg:h-10" />
    <div>
      <p className="text-primary">EMERGENCY</p>
      <p className="text-secondary">(237) 681-812-255</p>
    </div>
  </div>
  
  {/* Work Hour Info */}
  <div className="flex items-center space-x-3 w-full lg:w-1/3">
    <img src={clock} alt="clock" className="h-8 lg:h-10" />
    <div>
      <p className="text-primary">WORK HOUR</p>
      <p className="text-secondary">09:00 - 20:00 Everyday</p>
    </div>
  </div>
  
  {/* Location Info */}
  <div className="flex items-center space-x-3 w-full lg:w-1/3">
    <img src={location} alt="location" className="h-8 lg:h-10" />
    <div>
      <p className="text-primary">LOCATION</p>
      <p className="text-secondary">0123 Same Place</p>
    </div>
  </div>

</div>
      </div>
    </>
  );
});

Info.propTypes = {
  infoVisible: PropTypes.bool.isRequired, // Ensure infoVisible is a boolean and required
};

export default Info;
