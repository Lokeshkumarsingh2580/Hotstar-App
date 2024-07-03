import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[70vh] relative w-full text-white"
    >
      <div className=" w-[45%] space-y-2 absolute bottom-10 left-20">
        <h1 className="text-5xl font-bold">
          {data.name || data.title || data.original.title}
        </h1>
        <p className="text-sm">
          {data.overview.slice(0, 200)}
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400"
          >
            ...more
          </Link>
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-white space-x-3 flex gap-1">
            <i className="text-yellow-500 ri-megaphone-fill "></i>
            {data.release_date || "Not Present"}
            <i className="text-yellow-500 ri-album-fill "></i>
            {data.media_type.toUpperCase()}
          </p>
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="bg-[#6556CD] p-4 text-sm font-medium rounded w-fit"
          >
            {" "}
            Watch Tralier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
