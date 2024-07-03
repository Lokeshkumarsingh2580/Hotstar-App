import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-full ">
        <img src="logo-d-plus.svg" alt="logo" className=" w-46 pl-20 pt-8" />
        <div className="nav text-zinc-300  flex-col flex pl-14 pt-10 pb-2 gap-4 ">
          <h1 className="text-xl font-bold text-[1.5vw]">New Feeds</h1>
          <ul className="flex-col font-semibold flex text-[1vw] w-full">
            <Link
              to="/trending"
              className="hover:bg-blue-900 hover:text-white p-4 transition-all ease-out duration-500 rounded"
            >
              <i className="mr-2 ri-fire-line"></i>Trending
            </Link>
            <Link
              to="/popular"
              className="hover:bg-blue-900 hover:text-white p-4  transition-all ease-out duration-500 rounded "
            >
              <i className="mr-2 ri-mickey-line"></i> Popular
            </Link>
            <Link
              to="/movie"
              className="hover:bg-blue-900 hover:text-white p-4  transition-all ease-out duration-500 rounded "
            >
              <i className="mr-2 ri-movie-2-line"></i> Movies
            </Link>
            <Link
              to="/tv"
              className="hover:bg-blue-900 hover:text-white p-4  transition-all ease-out duration-500 rounded "
            >
              <i className="mr-2 ri-tv-line"></i> TvShows
            </Link>
            <Link
              to="/people"
              className="hover:bg-blue-900 hover:text-white p-4  transition-all ease-out duration-500 rounded "
            >
              <i className="mr-2 ri-team-line"></i> People
            </Link>
          </ul>
        </div>
        <hr className="border-none h-[1px] bg-slate-400" />
        <div className="flex flex-col pl-12 text-zinc-300 list-none mt-5 ">
          <h1 className="text-xl font-bold text-[1.5vw] ">
            Website Information
          </h1>
          <Link
            to="/about"
            className="hover:bg-blue-900 hover:text-white p-4 text-[1vw] mt-2  transition-all ease-out duration-500 rounded "
          >
            <i className="mr-2 ri-information-fill"></i> About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-blue-900 hover:text-white p-4 text-[1vw] mt-1  transition-all ease-out duration-500 rounded "
          >
            <i className="mr-2 ri-phone-fill"></i> Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
