import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
