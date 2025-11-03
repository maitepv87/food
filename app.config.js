import { YELP_API_KEY } from "./src/config/secrets";

export default {
  expo: {
    name: "food",
    slug: "food",
    version: "1.0.0",
    extra: {
      yelpApiKey: YELP_API_KEY,
    },
  },
};
