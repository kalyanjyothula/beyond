import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../container/App/reducer';

function Header({
  customStyles,
  isTextWhite,
  hideSignUp,
  hideLogin,
  showSearch,
}) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleOpenDropDown = () => {
    setDropDownOpen((prev) => !prev);
  };
  const {  isAuthenticated} = useSelector(appSelector)

  return (
    <div
      className={`h-20 px-4 flex items-center justify-between bg-transparent relative ${
        customStyles ? customStyles : ''
      } `}
    >
      <Link
        className={`text-title px-6 onlyMobile:px-2  uppercase font-one ${
          isTextWhite ? 'text-[#FDFFFE]' : 'text-primaryGreen'
        } ${showSearch ? 'onlyMobile:hidden' : ''}`}
        to='/'
      >
        Beyond
      </Link>
      {showSearch && (
        <Link
          className={`text-title px-6 onlyMobile:px-2  uppercase font-one ${
            isTextWhite ? 'text-[#FDFFFE]' : 'text-primaryGreen'
          } ${showSearch ? 'onlyMobile:block hidden' : ''}`}
          to='/'
        >
          B
        </Link>
      )}
      {showSearch && (
        <form
          className='flex h-16 bg-white items-center border 
          rounded-[45px] w-[50%] onlyMobile:w-[80%] px-4 gap-x-4 overflow-hidden'
        >
          <FiSearch className='h-6 w-6' />
          <input
            type='text'
            name='location'
            placeholder='Where to ?'
            className='h-full w-full focus:outline-none text-h8'
          />
        </form>
      )}
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
        </div>
      </div>
      <div
        className={`absolute top-[64px] right-[40px] min-w-[150px] transition-all duration-500 ease-in-out
                shadow-md py-2 px-4 bg-white  text-black border rounded-md ${
                  dropDownOpen ? `block !z-50` : `hidden`
                }`}
      >
        {isAuthenticated ? 
          <Link className='block text-body3 capitalize py-1' to='/profile'>
             Profile
          </Link>
          :
        <React.Fragment>
          {!hideSignUp && (
            <Link className='block text-body3 capitalize py-1' to='/signup'>
              Sign Up
            </Link>
          )}
          {!hideLogin && (
            <Link
              className='block text-body3 bg-white capitalize py-1'
              to='/login'
            >
              Log In
            </Link>
          )}
        </React.Fragment>}
        <Link
          className='hidden onlyMobile:block text-body3 capitalize py-1'
          to='/fav-trips'
        >
          ♥ Trips
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  customStyles: PropTypes.string,
  isTextWhite: PropTypes.bool,
  hideLogin: PropTypes.bool,
  hideSignUp: PropTypes.bool,
  showSearch: PropTypes.bool,
};

export default Header;
