import React from 'react';
import Header from '../../components/Header';
import favtripData from '../../data/favTripspage';
import { AiFillLike } from 'react-icons/ai';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import Slider from 'react-slick';
import TripCard from '../../components/TripCard';
// import PropTypes from 'prop-types';

function FavTripPage() {
  const settings = {
    speed: 300,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: 'unslick',
      },
    ],
  };
  const { favTrips, similarTrips, recommended } = favtripData;
  return (
    <div>
      <Header customStyles='shadow-md' />
      <div className='py-4 px-10 onlyMobile:px-4'>
        {favTrips.map(
          ({ id, image, title, description, likesCount, review }) => (
            <div
              key={id}
              className='rounded-lg 
            overflow-hidden drop-shadow-lg flex 
            gap-x-4 border my-4 onlyMobile:flex-wrap relative'
            >
              <div className='max-w-[340px] min-h-[300px] onlyMobile:max-w-none onlyMobile:min-h-none w-full'>
                <img
                  src={image}
                  alt={id}
                  className='h-full w-full object-cover'
                />
              </div>
              <div
                className='flex flex-col 
              gap-2 px-2 py-4 flex-1 justify-evenly min-w-[320px] onlyMobile:px-4'
              >
                <h1 className='text-h7 text-ubuntu  line-clamp-2 pt-4 pr-4'>
                  {title}
                </h1>
                <p className='text-body1 text-ubuntu line-clamp-3'>
                  {description}
                </p>
                <div className='grid grid-cols-2 gap-x-6 w-fit'>
                  <div className='flex gap-x-2 items-center'>
                    <AiFillLike className='h-5 w-5 text-[#FD9022]' />
                    <p className='text-body font-ubuntu'>{likesCount}</p>
                  </div>
                  <div className='flex gap-x-1 items-center'>
                    <p className='text-ubuntu text-body1 font-bold'>{review}</p>
                    <span className='text-ubuntu text-body1 capitalize'>
                      reviews
                    </span>
                  </div>
                </div>
                <Link
                  className='self-end mx-4 uppercase font-ubuntu 
                   text-body1 font-bold border px-4 py-2 rounded-lg 
                   bg-primaryBlue text-white onlyMobile:mx-2'
                  to='/'
                >
                  explore
                </Link>
              </div>
              <div className='absolute top-5 right-5'>
                <MdDelete className='h-6 w-6 text-red-600' />
              </div>
            </div>
          ),
        )}
      </div>
      <div className='px-10 py-1 onlyMobile:px-4 bg-primaryBackground'>
        <div className='py-2'>
          <h1 className='text-h7 font-one'>{similarTrips.title}</h1>
          <p className='text-body pb-4 font-ubuntu'>
            {similarTrips.description}
          </p>
          <div className='relative'>
            <Slider {...settings}>
              {similarTrips.data?.map(
                ({ id, image, title, description, likesCount, review }) => (
                  <TripCard
                    key={id}
                    image={image}
                    title={title}
                    description={description}
                    likesCount={likesCount}
                    reviewCount={review}
                    customStyles='2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]'
                  />
                ),
              )}
            </Slider>
          </div>
        </div>
      </div>
      <div className='px-10 py-1 onlyMobile:px-4 bg-primaryBackground'>
        <div className='py-2'>
          <h1 className='text-h7 font-one capitalize'>{recommended.title}</h1>
          <p className='text-body pb-4 font-ubuntu'>
            {recommended.description}
          </p>
          <div className='relative'>
            <Slider {...settings}>
              {recommended.data?.map(
                ({ id, image, title, description, likesCount, review }) => (
                  <TripCard
                    key={id}
                    image={image}
                    title={title}
                    description={description}
                    likesCount={likesCount}
                    reviewCount={review}
                    customStyles='2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]'
                  />
                ),
              )}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

FavTripPage.propTypes = {};

export default FavTripPage;
