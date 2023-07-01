import React from 'react';
import favtripData from '../../data/favTripspage';
import Slider from 'react-slick';
import {
  TripCard,
  FavTripCard,
  Footer,
  Header,
} from '../../components/Organism';

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
    <div className='relative'>
      <Header customStyles='shadow-md !bg-white z-60' />
      <div className='py-4 px-10 onlyMobile:px-4'>
        {favTrips.map(
          ({ id, image, title, description, likesCount, review }) => (
            <FavTripCard
              key={id}
              id={id}
              title={title}
              description={description}
              likesCount={likesCount}
              image={image}
              review={review}
              showDelete={true}
            />
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
