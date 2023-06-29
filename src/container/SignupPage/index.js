import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { InputField } from '../../components/Molecules';
import Button from '../../components/Molecules/Button';
import {
  GrGoogle,
  GrInstagram,
  GrLinkedinOption,
  GrGithub,
} from 'react-icons/gr';

function SignupPage() {
  return (
    <div className='bg-[#001B2E]'>
      <Header customStyles='' isTextWhite hideSignUp />
      <div className='py-10 flex items-center justify-center '>
        <div
          className='bg-white w-full mx-40 onlyMobile:mx-4 min-h-[80vh] 
    rounded-lg flex overflow-hidden flex-wrap '
        >
          <div className='flex-1 bg-blue-600 flex items-center justify-center '>
            <h1 className='text-h4 px-20 text-white font-one mobile:py-4 onlyMobile:text-h9'>
              Embark on your wanderlust-filled odyssey today and unlock a realm
              of incredible destinations by joining our travel community.
            </h1>
          </div>
          <div className='flex-1 py-4 mobile:basis-1/2 flex flex-col'>
            <div
              className='my-6 p-4
          text-white font-ubuntu
          bg-blue-800 rounded-r-[50px] text-h8 w-1/2'
            >
              <p>{`Welcome`}</p>
            </div>
            <h1 className='text-h8 text-center font-ubuntu pt-4'>
              Create Your Account
            </h1>
            <div
              className='flex flex-col px-10  
        py-4 gap-y-4 items-center justify-center w-full '
            >
              <InputField
                type='text'
                name='email'
                label='Email'
                placeholder='Enter Email'
              />
              <InputField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter Password'
              />
              <InputField
                type='text'
                name='mobile'
                label='Mobile'
                placeholder='Enter Mobile Number'
              />

              <Button
                type='button'
                name='signup'
                text='signup'
                height='40px'
                width='50%'
                customStyle='bg-blue-500 uppercase min-w-[120px] mb-2'
              />
              <div className='flex py-2 gap-x-6 items-center'>
                <GrGoogle
                  className='h-10 w-12 text-blue-400 
            shadow-md p-2 rounded-md cursor-pointer'
                />
                <GrInstagram
                  className='h-10 w-12 text-pink-500 
            shadow-md p-2 rounded-md cursor-pointer'
                />
                <GrLinkedinOption
                  className='h-10 w-12 text-blue-600 
            shadow-md p-2 rounded-md cursor-pointer'
                />
                <GrGithub
                  className='h-10 w-12
            shadow-md p-2 rounded-md cursor-pointer'
                />
              </div>
            </div>
            <div className='pt-10 text-center justify-self-end'>
              <p className='text-body2 font-ubuntu'>
                {`Already have Account ? `}
                <Link
                  to='/login'
                  className='font-ubuntu text-body1 text-blue-700
               font-bold'
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

SignupPage.propTypes = {};

export default SignupPage;
