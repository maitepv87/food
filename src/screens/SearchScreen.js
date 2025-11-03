import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useRestaurans } from "../hooks/useRestaurans";
import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { searchApi, restaurants, errorMessage } = useRestaurans();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <Text>We have found {restaurants.length} restaurants</Text>

      <RestaurantsList
        title="Cost Effective"
        restaurants={filterRestaurantsByPrice("$")}
      />
      <RestaurantsList
        title="Bit Pricier"
        restaurants={filterRestaurantsByPrice("$$")}
      />
      <RestaurantsList
        title="Big Spender"
        restaurants={filterRestaurantsByPrice("$$$")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
