import axios from "../../Utils/Axios";
export { removetv } from "../reducers/tvSlice";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, state) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((item) => item.name),
      videos: videos.data.results.find((data) => data.type === "Trailer"),
      watchproviders: watchproviders.data.results.US,
    };
    dispatch(loadtv(theultimatedetails));
  } catch (error) {
    console.log(error);
  }
};
