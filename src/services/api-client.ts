import axios from "axios";

// the API Key should be set using environment variables

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b22062a9fa144ca1a6d8b23d256ec7f6",
  },
});
