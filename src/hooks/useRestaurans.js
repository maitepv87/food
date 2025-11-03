import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export const useRestaurans = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Miami",
        },
      });

      setRestaurants(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return { searchApi, restaurants, errorMessage };
};
