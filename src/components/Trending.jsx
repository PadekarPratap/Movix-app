import React, { useEffect, useState } from "react";
import SwitchTabs from "./SwitchTabs";
import { fetchDataFromApi } from "../utils/api";
import { Endpoints, IMAGE_URL } from "../utils/Endpoints";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dayjs from "dayjs";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const getDayorWeek = () => {
    return activeTab === 0 ? "day" : "week";
  };
  const getMovies = () => {
    const dayOrWeek = getDayorWeek();
    fetchDataFromApi(Endpoints.MOVIE_TRENDING + dayOrWeek).then((res) => {
      console.log(res);
      setTrendingMovies(res.data.results);
    });
  };

  useEffect(() => {
    getMovies();
  }, [activeTab]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 my-[5rem]">
      <div className="text-white flex sm:justify-between sm:items-center flex-col sm:flex-row mb-[2.5rem]">
        <h2 className="text-3xl font-semibold font-mono mb-6 sm:mb-0">
          Trending
        </h2>
        <div className="flex bg-slate-50 text-black px-2 py-1 gap-2 rounded-full self-start sm:self-stretch">
          <SwitchTabs
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            data={["day", "week"]}
          />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        slidesToSlide={2}
      >
        {trendingMovies.map((movie) => {
          const posterURL = IMAGE_URL + movie.poster_path;
          return (
            <div key={movie.id}>
              <div>
                <LazyLoadImage effect="opacity" className="rounded-lg" src={posterURL} />
              </div>
              <div className="text-center">
                <span className="text-white block">{movie.title || movie.name}</span>
                <span className="block text-slate-500">{dayjs(movie.release_date).format("MMM D, YYYY")}</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Trending;
