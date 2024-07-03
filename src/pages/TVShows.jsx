import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import DropDown from "../Components/DropDown";
import Cards from "../Components/Cards";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TVShows = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tvshows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  const getTvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTvShows((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function HandleRefresh() {
    if (tvshows.length === 0) {
      getTvShows();
    } else {
      setPage(1);
      setTvShows([]);
      getTvShows();
    }
  }

  useEffect(() => {
    HandleRefresh();
  }, [category]);

  return tvshows.length > 0 ? (
    <div className="h-screen w-screen  ">
      <div className="flex h-16 p-8 w-full items-center justify-between ">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-white ri-2x"
          ></i>
        </Link>
        <Link to="/" className="text-zinc-400 text-2xl">
          TvShows
        </Link>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <div className="flex gap-8">
          <DropDown
            title="Category"
            options={["airing_today", "on_the_air", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tvshows.length}
        next={getTvShows}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tvshows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TVShows;
