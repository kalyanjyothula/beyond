import React from 'react';
import { AiOutlineHeart, AiFillLike } from 'react-icons/ai';
import PropTypes from 'prop-types';

function TripCard({
  image,
  title,
  description,
  likesCount,
  reviewCount,
  customStyles,
}) {
  return (
    <div
      className={`relative shadow-lg w-full lg:max-w-[320px] 2xl:max-w-[30%] overflow-hidden rounded-lg ${
        customStyles ? customStyles : ''
      }`}
    >
      <div className='relative h-[256px]'>
        <img src={image} alt='image' className='object-cover h-full w-full' />
        <div className='absolute right-3 top-3'>
          <AiOutlineHeart className='h-8 w-8 cursor-pointer text-white' />
        </div>
      </div>
      <h1 className='text-h9 pt-1 px-2 line-clamp-2 font-ubuntu '>{title}</h1>
      <p className='text-caption px-2 leading-4 line-clamp-2 font-ubuntu'>
        {description}
      </p>
      <div className='px-2 pt-2 pb-4 absolute bottom-0 flex justify-between w-full'>
        <div className='flex items-center gap-x-1'>
          <AiFillLike className='h-5 w-5 text-primaryBlue' />
          <p className='text-body font-ubuntu'>{likesCount}</p>
        </div>
        <div>
          <p className='text-body3 font-ubuntu'>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

TripCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  customStyles: PropTypes.string,
};

export default TripCard;
