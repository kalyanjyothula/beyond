import React from 'react';
import favTripPageData from '../../data/favTripspage';
import SearchResultData from '../../data/searchResultPage';
import { Footer, FavTripCard, Header } from '../../components/Organism';
import {
  CheckBox,
  Select,
  RadioGroup,
  RangeSlider,
} from '../../components/Molecules';
// import PropTypes from 'prop-types';

function SearchResultPage() {
  const { favTrips } = favTripPageData;
  const { filters, destination, stay } = SearchResultData;
  return (
    <div>
      <Header customStyles='shadow-md bg-white' showSearch />
      <div className='flex gap-x-2 py-4'>
        <div
          className='basis-[220px] drop-shadow-lg 
        my-4 shadow-lg rounded-lg h-fit p-4 border onlyMobile:hidden'
        >
          <div>
            {filters.map(({ id, title, filter }) => (
              <RadioGroup key={id} label={title} options={filter} />
            ))}
            <RangeSlider />
            {destination.map(({ id, label, options }) => (
              <Select key={id} options={options} label={label} />
            ))}
            {stay.map(({ id, label, options }) => (
              <CheckBox key={id} label={label} options={options} />
            ))}
          </div>
        </div>
        <div className='flex-1'>
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
                // showDelete={true}
              />
            ),
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

SearchResultPage.propTypes = {};

export default SearchResultPage;
