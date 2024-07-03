import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  return (
    <div className="absolute top-0  left-0 z-[100] bg-[rgba(0,0,0,.8)] w-full h-screen flex items-center justify-center">
      <Link>
        <i
          onClick={() => navigate(-1)}
          className="absolute right-32 top-10 ri-close-fill text-white ri-2x"
        ></i>
      </Link>

      {ytvideo ? (
        <ReactPlayer
          height={500}
          controls
          width={1000}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        ></ReactPlayer>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
