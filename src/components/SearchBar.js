import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 16,
    backgroundColor: "#F0F0F0",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  iconStyle: {
    fontSize: 24,
    marginRight: 8,
    color: "#666",
  },
});

export default SearchBar;
