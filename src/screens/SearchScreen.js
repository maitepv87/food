import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          console.log("Term was submited");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
