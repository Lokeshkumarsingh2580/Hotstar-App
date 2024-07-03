import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "../Components/Loading";
import HorizontalCards from "../Components/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => dispatch(removemovie());
  }, [id]);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="min-h-[120vh] relative w-screen px-10"
    >
      {/* Navigation */}
      <nav className="w-full h-[10vh] items-center text-zinc-200 flex gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-fill text-white ri-2x"
        ></Link>
        <a href={info.detail.homepage} target="_blank">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Poster */}
      <div className="flex w-full text-white">
        <img
          className="h-[40vh] object-cover shadow-2xl"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.backdrop_path || info.detail.poster_path
          }`}
          alt=""
        />
        <div className="content ml-10">
          <h1 className="text-4xl text-white">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}{" "}
            <small className="text-xl font-bold text-zinc-200">
              ({info.detail.release_date.split(" ")[0]})
            </small>
          </h1>
          <div className="flex mt-3 mb-3 gap-x-4 items-center text-zinc-100">
            <span className="rounded-full text-md font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="font-semibold text-2xl leading-6 w-[60px]">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((item) => item.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <h1 className="text-2xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>
          <h1 className="text-2xl mb-3 mt-4 ">Overview</h1>
          <p>{info.detail.overview}</p>
          <h1 className="text-2xl mb-3 mt-4 ">Movie Translated</h1>
          <p className="mb-6">{info.translations.join(", ")}</p>

          <Link
            className="mt-4 p-4 bg-[#6556CD] rounded-lg"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill mr-2"></i>Play Trailer
          </Link>
        </div>
      </div>

      {/* Recommdations */}
      <hr className="mt-20 mb-5 h-[2px] border-none bg-zinc-600" />
      <h1 className=" mb-5 text-3xl font-bold  text-white">
        Recommendations & Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
