import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import HeroBanner from '../../components/HeroBanner';

function HomePage(props) {
  return (
    <div>
      <div className='bg-heroBannerGradient w-full h-[80vh] bg-no-repeat bg-center bg-cover'>
        <Header />
      </div>
      <div>
        The comments in the post are worth looking into because they address cross-browser support.
        Coverage is actually pretty good. Caniuse shows 83% global coverage with Firefox (and,
        predictably, Internet Explorer) lacking support. One commenter offered a nice fallback,
        along with a small tweak that desaturates the effect:
      </div>
      <HeroBanner />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
