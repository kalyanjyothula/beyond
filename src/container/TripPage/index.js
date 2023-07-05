import React from 'react';
import Slider from 'react-slick';
import { Footer, Header, TripCard } from '../../components/Organism';
import tripData from '../../data/tripPage';
import { GiBus } from 'react-icons/gi';
import { FaCaravan } from 'react-icons/fa';
import { WiTrain } from 'react-icons/wi';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './slick-custom.css';
// import PropTypes from 'prop-types';

function TripPage() {
  const {
    trip01: {
      title,
      description,
      images,
      routes,
      nearLocations,
      similarExperiences,
    },
  } = tripData;

  const position = [51.505, -0.09];
  const settings = {
    speed: 300,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  const nearLocationsSettings = {
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
      <Header customStyles='shadow-md !bg-white z-60' showSearch />
      <div className='relative px-1 pt-2'>
        <Slider {...settings}>
          {images.map(({ id, src }) => (
            <div key={id} className='w-full h-[80vh]'>
              <img src={src} alt='src' className='h-full w-full object-cover' />
            </div>
          ))}
        </Slider>
        <div className='px-4 pt-2 bg-primaryBackground'>
          <div className='text-h4 font-one text-center underline underline-offset-4'>
            {title}
          </div>
          <div className='pb-2'>
            <h1 className='text-h7 font-one capitalize underline underline-offset-2'>
              Have you heard !
            </h1>
            {description.map(({ id, content }) => (
              <p key={id} className='text-body1 font-ubuntu py-2'>
                {content}
              </p>
            ))}
          </div>
          <div className='pb-2'>
            <h1 className='text-h7 font-one capitalize underline underline-offset-2'>
              What is the best way to reach . . . ?
            </h1>
            <div>
              {routes.map((route, index) => (
                <div key={route}>
                  <div
                    className='self-start text-h7 font-one capitalize pr-2 
                  underline underline-offset-4'
                  >
                    Route : {index + 1}
                  </div>
                  <div className='flex gap-2 items-end onlyMobile:flex-wrap px-4'>
                    {route.map(
                      (
                        {
                          arrival,
                          // destination,
                          distance,
                          mediumOfTransport,
                          travelTime,
                        },
                        index,
                      ) => (
                        <div
                          key={arrival + index}
                          className='flex gap-x-2 items-center py-6 onlyMobile:flex-wrap'
                        >
                          <div className='text-h8 text-red-500 '>{arrival}</div>
                          {distance && travelTime ? (
                            <div className='flex gap-2 onlyMobile:my-2'>
                              <div className='relative'>
                                <span
                                  className='underline underline-offset-4 
                          text-body1 font-ubuntu px-2 whitespace-nowrap'
                                >
                                  {distance} Kms, {(travelTime / 60).toFixed(2)}
                                  hrs
                                </span>
                                {mediumOfTransport === 'Bus' && (
                                  <GiBus className=' h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+5px)]' />
                                )}
                                {mediumOfTransport === 'Train' && (
                                  <WiTrain className=' h-10 w-10 absolute left-[calc(50%-20px)] top-[calc(50%+1px)]' />
                                )}
                                {mediumOfTransport === 'Local Transport' && (
                                  <FaCaravan className=' h-6 w-6 absolute left-[calc(50%-20px)] top-[calc(50%+12px)]' />
                                )}
                              </div>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full pt-4'>
            <h1 className='text-h6 font-one underline underline-offset-2 pb-4'>
              Navigating with Route Maps
            </h1>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className='relative pt-10 bg-primaryBackground px-4'>
          <h1
            className='text-h7 font-one capitalize pb-4 
          underline underline-offset-2'
          >
            Exploring Nearby Gems: Unveiling Local Points of Interest
          </h1>
          <Slider {...nearLocationsSettings}>
            {nearLocations.map(
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
        <div className='relative py-10 bg-primaryBackground px-4'>
          <h1
            className='text-h7 font-one capitalize pb-4 
          underline underline-offset-2'
          >
            Echoes of Enchantment: Discovering Similar Experiences in Nearby
            Locations
          </h1>
          <Slider {...nearLocationsSettings}>
            {similarExperiences.map(
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
      <Footer />
    </div>
  );
}

TripPage.propTypes = {};

export default TripPage;
