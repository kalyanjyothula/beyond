import React from 'react';
// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import Slider from 'react-slick';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TripCard from '../../components/TripCard';
import homePageData from './../../data/homepage';
import './slick-custom.css';

function HomePage() {
  const { tripCards } = homePageData;
  const categoryKeys = Object.keys(tripCards);
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
  return (
    <div>
      <div
        className='bg-heroBannerGradient w-full h-[70vh] 
      bg-no-repeat bg-center bg-cover flex flex-col'
      >
        <Header isTextWhite />
        <div className='flex items-center justify-center h-full'>
          <form
            className='flex h-16 bg-white items-center 
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
        </div>
      </div>
      <div className='bg-primaryBackground pb-20'>
        {categoryKeys?.flatMap((item) => (
          <div
            className='px-10 py-1 onlyMobile:px-4 bg-primaryBackground'
            key={item}
          >
            <div className='py-2'>
              <h1 className='text-h7 font-one capitalize'>
                {tripCards[`${item}`].title}
              </h1>
              <p className='text-body pb-4 font-ubuntu'>
                {tripCards[item].description}
              </p>
              <div className='relative'>
                <Slider {...settings}>
                  {tripCards[item]?.data?.map(
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
            {tripCards[item].banner && (
              <div
                className={`min-h-[100px] w-full  my-10 rounded-md ${
                  tripCards[item].banner?.color
                    ? tripCards[item].banner?.color
                    : 'bg-greenBackground'
                }`}
              >
                <h1
                  className='text-h7 text-white font-one 
                  w-full py-6 px-10'
                >
                  {tripCards[item].banner?.title}
                  <span className='text-body3 block text-right pr-2'>
                    - Team Beyond
                  </span>
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
