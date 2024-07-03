import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import DropDown from "../Components/DropDown";
import HorizontalCards from "../Components/HorizontalCards";

const PeopleDetails = () => {
  const [category, setCategory] = useState("movie");
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => dispatch(removepeople());
  }, [id]);

  return info ? (
    <div className="w-screen bg-[#1F1E24] p-8 ">
      {/* Navigation */}
      <nav className="w-full h-[10vh] mb-5 items-center text-zinc-200 flex gap-10 text-xl">
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
      {/* Left Poster and Details */}
      <div className="w-full flex ">
        <div className="w-[30%]">
          <img
            className="w-[50vh] object-cover shadow-2xl"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 h-[2px] border-none bg-zinc-600" />
          <div className="text-2xl flex my-5 text-white gap-x-4">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              target="_blank"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            {/* Personal Info */}
          </div>
          <div>
            <h1 className="text-2xl text-zinc-400 font-semibold ">
              Person Info
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Known for
            </h1>
            <h1 className="text-zinc-400">
              {info.detail.known_for_department}
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
            <h1 className="text-zinc-400">
              {info.detail.gender === 2 ? "Male" : "Female"}
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Birthday
            </h1>
            <h1 className="text-zinc-400">{info.detail.birthday}</h1>

            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Deathday
            </h1>
            <h1 className="text-zinc-400">
              {info.detail.deathday ? info.detail.deathday : "Still Alive"}
            </h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Place Of Birth
            </h1>
            <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
            <h1 className="text-lg text-zinc-400 font-semibold mt-3">
              Also Known As
            </h1>
            <h1 className="text-zinc-400">
              {info.detail.also_known_as.join(", ")}
            </h1>
          </div>
        </div>

        {/* information */}

        <div className="w-[70%] ml-[5%]">
          <h1 className="text-zinc-300 text-6xl font-black my-5">
            {info.detail.name}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">{info.detail.biography}</p>

          <h1 className=" mt-5 mb-5 text-lg text-zinc-400 font-semibold">
            Summary
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>
            <DropDown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((items, i) => (
              <li className="hover:text-white rounded hover:bg-[#1919d] duration-300 cursor-pointer">
                <Link to={`/${category}/details/${items.id}`} key={i}>
                  <p className="inline">
                    {items.name ||
                      items.title ||
                      items.original_name ||
                      items.original_title}
                  </p>

                  <p className="block m-4">
                    {items.character && `Charcter Name: ${items.character}`}
                  </p>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;
