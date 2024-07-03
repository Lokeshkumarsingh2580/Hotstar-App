import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "../Components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);

  const navigate = useNavigate();

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function HandleRefresh() {
    if (people.length === 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  }

  useEffect(() => {
    HandleRefresh();
  }, [category]);

  return people.length > 0 ? (
    <div className="h-screen w-screen  ">
      <div className="flex h-16 p-8 w-full items-center justify-between ">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-fill text-white ri-2x"
          ></i>
        </Link>
        <Link to="/" className="text-zinc-400 text-2xl">
          People
        </Link>
        <div className="w-[50%]">
          <Navbar />
        </div>
        <div className="flex gap-8"></div>
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={people} title="people" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
