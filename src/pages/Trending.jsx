import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import DropDown from "../Components/DropDown";
import Cards from "../Components/Cards";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function HandleRefresh() {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  }

  useEffect(() => {
    HandleRefresh();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="h-screen w-screen">
      <div className="flex h-16 p-4 w-full items-center justify-between ">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-white ri-2x"
          ></i>
        </Link>
        <Link to="/" className="text-zinc-400 text-2xl">
          Trending
        </Link>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <div className="flex gap-8">
          <DropDown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <DropDown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
