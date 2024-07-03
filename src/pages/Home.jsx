import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import Header from "../Components/Header";
import HorizontalCards from "../Components/HorizontalCards";
import Loading from "../Components/Loading";
import DropDown from "../Components/DropDown";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  const getWall = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/trending/all/day`);
      let random =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(random);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getWall();
    getTrending();
  }, [category]);

  if (loading) return <Loading />;

  return (
    wallpaper &&
    trending && (
      <div className="h-screen w-screen flex">
        <Sidebar />
        <div className="w-[80%] mx-auto h-full overflow-auto overflow-x-hidden">
          <Navbar />
          <Header data={wallpaper} />
          <div className="head flex justify-between items-center p-2 ">
            <h1 className="text-zinc-300 text-3xl p-4">Trending</h1>
            <DropDown
              title="Trending"
              options={["tv", "movie", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <HorizontalCards data={trending} />
        </div>
      </div>
    )
  );
};

export default Home;
