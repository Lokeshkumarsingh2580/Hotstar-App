import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-20 p-8 w-full h-full bg-[#1F1E24]">
      {data.map((items, index) => (
        <Link
          to={`/${items.media_type || title}/details/${items.id}`}
          key={index}
          className="relative inset-0 w-[28vh]"
        >
          <img
            className="h-[40vh] object-cover shadow-2xl"
            src={`https://image.tmdb.org/t/p/original/${
              items.poster_path || items.backdrop_path || items.profile_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-400 mt-3 font-semibold">
            {items.name || items.title || items.original.title}
          </h1>
          {items.vote_average && (
            <div className="absolute right-[-10px] bottom-[100px] rounded-full text-md font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center">
              {(items.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
