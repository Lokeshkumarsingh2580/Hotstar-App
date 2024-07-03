import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmI1Yzg4Nzg4N2UxYTkyOTgzYmUwM2Q3ZDhkNjk1NCIsInN1YiI6IjY1YmViZWMyYmE0ODAyMDE4MjZhYTk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbJlp_Y22sxs5VPPyewVBtYKUS_sB6hHKqar2DUAbb4",
  },
});

export default instance;
