import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header({ customStyles, isTextWhite }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleOpenDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };

  return (
    <div
      className={`h-20 px-4 flex items-center justify-between bg-transparent ${
        customStyles ? customStyles : ''
      } `}
    >
      <h1
        className={`text-title px-6 onlyMobile:px-2  uppercase font-one ${
          isTextWhite ? 'text-[#FDFFFE]' : 'text-primaryGreen'
        }`}
      >
        Beyond
      </h1>
      <div className='flex items-center px-4 gap-x-1 backdrop-brightness-100'>
        <Link
          to='/fav-trips'
          className={`onlyMobile:hidden flex px-2 justify-between items-center cursor-pointer ${
            isTextWhite && 'text-[#FDFFFE]'
          }`}
        >
          <AiOutlineHeart className='h-5 w-5 text-h8' />
          <h3 className='pl-1 text-h8 font-ubuntu tracking-normal '>Trips</h3>
        </Link>
        <div
          className={`flex items-center gap-x-2 justify-between
             p-2 border-2 rounded-2xl cursor-pointer relative ${
               isTextWhite && 'text-[#FDFFFE]'
             }`}
          onClick={() => handleOpenDropDown()}
        >
          <AiOutlineMenu className='h-6 w-6 ' />
          <AiOutlineUser className='h-6 w-6 ' />
          <div
            className={`absolute top-[43px] -right-[10px] min-w-[150px] transition-all duration-500 ease-in-out
                shadow-md py-2 px-4 bg-white  text-black border rounded-md ${
                  dropDownOpen ? `block z-[999]` : `hidden`
                }`}
          >
            <Link className='block text-body3 capitalize py-1' to='/signup'>
              Sign Up
            </Link>
            <Link className='block text-body3 capitalize py-1' to='/login'>
              Log In
            </Link>
            <Link
              className='hidden onlyMobile:block text-body3 capitalize py-1'
              to='/fav-trips'
            >
              ♥ Trips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  customStyles: PropTypes.string,
  isTextWhite: PropTypes.bool,
};

export default Header;
