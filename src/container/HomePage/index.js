import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import { FiSearch } from "react-icons/fi";
import Slider from "react-slick";
import { TripCard, Header, Footer } from "../../components/Organism";
// import homePageData from "./../../data/homepage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./slick-custom.css";
import {
  addToFavoriteTrip,
  getFavoriteTrips,
  getHomePageData,
  homePageSelector,
} from "./reducer";
import { appSelector } from "../App/reducer";
import PageLoading from "../../components/Organism/PageLoading";
import defaultImage from "../../images/tripCards/nature/araku.jpeg";

function HomePage() {
  // const { tripCards } = homePageData;
  // const categoryKeys = Object.keys(tripCards);
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
        settings: "unslick",
      },
    ],
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, userInfo } = useSelector(appSelector);
  const [searchText, setSearchText] = useState("");

  const {
    favoriteTrips,
    homepageData,
    loading: homeLoading,
  } = useSelector(homePageSelector);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(
        getFavoriteTrips({ email: userInfo.email, token: userInfo.token })
      );
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (homepageData?.length <= 0) dispatch(getHomePageData());
  }, [dispatch]);

  const handleSearchTextChange = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    setSearchText(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  const handleAddFavorite = (e, id) => {
    e.preventDefault();
    dispatch(addToFavoriteTrip(id));
  };

  if (loading || homeLoading) return <PageLoading />;

  return (
    <div>
      <div
        className="bg-heroBannerGradient w-full h-[70vh] 
      bg-no-repeat bg-center bg-cover flex flex-col"
      >
        <Header isTextWhite />
        <div className="flex items-center justify-center h-full">
          <form
            onSubmit={handleOnSubmit}
            className="flex h-16 bg-white items-center 
          rounded-[45px] w-[50%] onlyMobile:w-[80%] px-4 gap-x-4 overflow-hidden"
          >
            <FiSearch className="h-6 w-6" />
            <input
              type="text"
              name="location"
              value={searchText}
              onChange={handleSearchTextChange}
              placeholder="Where to ?"
              className="h-full w-full focus:outline-none text-h8"
            />
          </form>
        </div>
      </div>
      <div className="bg-primaryBackground pb-20">
        {homepageData?.map((item) => (
          <div
            className="px-10 py-1 onlyMobile:px-4 bg-primaryBackground"
            key={item}
          >
            <div className="py-2">
              <h1 className="text-h7 font-one capitalize">{item.title}</h1>
              <p className="text-body pb-4 font-ubuntu">{item.description}</p>
              <div className="relative">
                <Slider {...settings}>
                  {item?.data?.map(
                    ({ _id, tripName, mdDescription, likes, review }) => (
                      <TripCard
                        key={_id}
                        path={"/trip/" + _id}
                        image={defaultImage}
                        title={tripName}
                        description={mdDescription + mdDescription}
                        likesCount={likes}
                        reviewCount={review}
                        id={_id}
                        isFavorite={favoriteTrips.includes(_id)}
                        addFavorite={(e) => handleAddFavorite(e, _id)}
                        customStyles="2xl:max-w-[96%] lg:max-w-[96%] mb-4 min-h-[388px]"
                      />
                    )
                  )}
                </Slider>
              </div>
            </div>
            {item?.banner.length > 0 &&
              item?.banner.map(({ title, color }) => (
                <div
                  key={title}
                  className={`min-h-[100px] w-full  my-10 rounded-md ${
                    color ? color : "bg-greenBackground"
                  }`}
                >
                  <h1
                    className="text-h7 text-white font-one 
                  w-full py-6 px-10"
                  >
                    {title}
                    <span className="text-body3 block text-right pr-2">
                      - Team Beyond
                    </span>
                  </h1>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
