import { useState, useEffect } from "react";
import axios from "../Utils/Axios";
import { Link } from "react-router-dom";
import noimage from "/no image.webp";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState(null);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div>
      <nav className="text-zinc-400 w-full h-[10vh] relative flex items-center justify-start ml-[15%]">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="bg-inherit p-2 rounded outline-none text-xl w-[50%] mx-8"
        />
        {query.length > 0 && (
          <i onClick={() => setQuery("")} className="ri-close-line"></i>
        )}
      </nav>
      <div className="w-[36%] bg-zinc-300 max-h-[50vh] z-50 absolute top-[10%] rounded left-[36.5%] overflow-auto">
        {searchData?.map((items, index) => {
          return (
            <Link
              to={`/${items.media_type}/details/${items.id}`}
              key={index}
              className="hover:text-black font-semibold w-full items-center hover:bg-zinc-400 duration-300 flex justify-start text-lg p-8 border-b-2 rounded-t-md border-zinc-400 "
            >
              <img
                className="w-[10vw] h-[20vh] object-cover mr-5 shadow-lg rounded"
                src={
                  items.backdrop_path || items.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        items.backdrop_path || items.profile_path
                      }`
                    : noimage
                }
              />
              <span>
                {items.name ||
                  items.orignal_title ||
                  items.title ||
                  items.orignal_name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
