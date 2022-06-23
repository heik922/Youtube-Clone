import axios from "axios";

const KEY = "AIzaSyC9OLp9n7CrnRg3qweEk2VXelGX11lRIug";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
