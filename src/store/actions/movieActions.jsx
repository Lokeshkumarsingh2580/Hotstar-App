import axios from "../../Utils/Axios";
export { removemovie } from "../reducers/movieSlice";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, state) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((item) => item.name),
      videos: videos.data.results.find((data) => data.type === "Trailer"),
      watchproviders: watchproviders.data.results.US,
    };
    dispatch(loadmovie(theultimatedetails));
  } catch (error) {
    console.log(error);
  }
};
