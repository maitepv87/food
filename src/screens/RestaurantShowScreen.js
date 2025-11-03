import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (error) {
      console.error("Error fetching restaurant:", error.message);
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        ListHeaderComponent={
          <Text style={styles.title}>{restaurant.name}</Text>
        }
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
  separator: {
    height: 16,
  },
});

export default RestaurantShowScreen;
