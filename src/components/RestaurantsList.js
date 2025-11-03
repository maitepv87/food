import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantShow", { id: item.id });
              }}
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 5,
    marginBottom: 8,
    color: "#333",
  },
});

export default withNavigation(RestaurantsList);
