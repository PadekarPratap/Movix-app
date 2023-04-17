import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";
import { Endpoints, IMAGE_URL } from "../utils/Endpoints";

const HeroBanner = () => {
  const getBackgroundImage = () => {
    fetchDataFromApi(Endpoints.MOVIE_UPCOMING).then((res) =>
      setBackground(
        IMAGE_URL +
          res.data.results[Math.floor(Math.random() * 20)].backdrop_path
      )
    );
  };
  useEffect(() => {
    getBackgroundImage();
  }, []);

  const [background, setBackground] = useState(null);
  return (
    <div className="w-full h-[90vh] relative">
      {/* overlay color on image  */}
      <div className="absolute inset-0 bg-[#04152d] opacity-60"></div>

      {/* overlay text on image  */}
      <div className="absolute inset-0 text-white">
        <div className="text-center mt-[10rem]">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Welcome.</h1>
          <p className="text-xl md:text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="mt-[2rem] max-w-[1000px] mx-auto">
            <input
              type="text"
              placeholder="Search for a Movie or a TV Show..."
              className="text-xl md:text-2xl px-8 py-3 text-black w-2/3 rounded-l-full focus:border-none focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#f89e00] to-[#da2f68] px-4 py-3 rounded-r-full text-xl md:text-2xl">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Image changed dynamically */}
      {background && <div className="w-full h-full">
        <img className="w-full h-full" src={background} alt="backdrop" />
      </div>}

      {/* bottom opacity gradient  */}
      <div
        id="bottom-gradient"
        className="opacity-background absolute bottom-0 left-0 h-[250px] w-full"
      ></div>
    </div>
  );
};

export default HeroBanner;
