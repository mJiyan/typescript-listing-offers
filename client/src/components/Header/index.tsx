import React from 'react';
import Logo from '../../assets/images/sixt-logo.png';

const Header = () => {
  return (
    <nav className="bg-orange-600 h-24">
      <div className=" flex items-center justify-center flex-wrap py-2">
        <span className="font-semibold text-sm tracking-tight flex flex-col items-center">
          <img src={Logo} className="h-16 w-16" />
          <p className='px-5'> Rent a car</p>
        </span>
      </div>
    </nav>
  );
};

export default Header;
