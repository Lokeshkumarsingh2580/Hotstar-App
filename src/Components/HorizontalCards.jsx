import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="flex w-full overflow-y-hidden overflow-x-scroll">
      {data.length > 0 ? (
        data.map((items, index) => {
          return (
            <Link
              to={`/${items.media_type}/details/${items.id}`}
              key={index}
              className="cards h-[40vh] text-white rounded bg-zinc-900 mr-5 mb-4 flex flex-col min-w-[20%]"
            >
              <img
                className="w-full h-[65%] rounded "
                src={`https://image.tmdb.org/t/p/original/${
                  items.backdrop_path || items.profile_path
                }`}
                alt=""
              />
              <div className="text-white h-[35%] overflow-y-auto p-2 ">
                <h2 className="font-semibold text-lg">
                  {items.name ||
                    items.orignal_title ||
                    items.title ||
                    items.orignal_name}
                </h2>
                <p className="text-xs ">
                  {items.overview.slice(0, 50)}
                  <span className="text-zinc-400">...more</span>
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <h1>Nothing to show</h1>
      )}
    </div>
  );
};

export default HorizontalCards;
