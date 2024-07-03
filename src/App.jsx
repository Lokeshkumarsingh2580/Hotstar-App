import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About";
import Movies from "./pages/Movies";
import TvShows from "./pages/TVShows";
import People from "./pages/People";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import PeopleDetails from "./pages/PeopleDetails";
import Popular from "./pages/Popular";
import NotFound from "./pages/NotFound";
import Trailer from "./pages/Trailer";
import ContactUs from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-[#1F1E24]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PeopleDetails />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
