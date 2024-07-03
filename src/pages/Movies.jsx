import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import DropDown from "../Components/DropDown";
import Cards from "../Components/Cards";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function HandleRefresh() {
    if (movies.length === 0) {
      getMovies();
    } else {
      setPage(1);
      setMovies([]);
      getMovies();
    }
  }

  useEffect(() => {
    HandleRefresh();
  }, [category]);

  return movies.length > 0 ? (
    <div className="h-screen w-screen  ">
      <div className="flex h-16 p-8 w-full items-center justify-between ">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-white ri-2x"
          ></i>
        </Link>
        <Link to="/" className="text-zinc-400 text-2xl">
          Movies
        </Link>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <div className="flex gap-8">
          <DropDown
            title="Category"
            options={["top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
